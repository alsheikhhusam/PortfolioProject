import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (s = '') =>
    s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({
            success: false,
            message: `Method ${req.method} Not Allowed`
        });
    }

    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'Missing required fields'
        });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid email format'
        });
    }

    if (!process.env.RESEND_API_KEY || !process.env.FROM_EMAIL || !process.env.RECEIVER_EMAIL) {
        console.error('Email configuration missing:', {
            hasApiKey: !!process.env.RESEND_API_KEY,
            hasFrom: !!process.env.FROM_EMAIL,
            hasReceiver: !!process.env.RECEIVER_EMAIL
        });
        return res.status(500).json({
            success: false,
            message: 'Server configuration error'
        });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: process.env.FROM_EMAIL,
            to: [process.env.RECEIVER_EMAIL],
            replyTo: email,
            subject: `New message from ${name} (Portfolio Contact)`,
            text: `New Portfolio Contact\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n—\nSent from your portfolio contact form`,
            html: `
            <div style="background-color:#0f172a;padding:32px 16px;font-family:'Inter','Roboto',Arial,sans-serif;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;margin:0 auto;background-color:#1e293b;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.06);">
                <tr>
                  <td style="background:linear-gradient(90deg,#38bdf8,#a78bfa);padding:26px 32px;">
                    <h1 style="margin:0;color:#0f172a;font-size:20px;font-weight:700;letter-spacing:-0.02em;">New Portfolio Contact</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:32px;">
                    <p style="margin:0 0 4px;color:#94a3b8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;">Name</p>
                    <p style="margin:0 0 22px;color:#f1f5f9;font-size:16px;font-weight:600;">${escapeHtml(name)}</p>
                    <p style="margin:0 0 4px;color:#94a3b8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;">Email</p>
                    <p style="margin:0 0 26px;font-size:16px;"><a href="mailto:${escapeHtml(email)}" style="color:#38bdf8;text-decoration:none;font-weight:600;">${escapeHtml(email)}</a></p>
                    <p style="margin:0 0 8px;color:#94a3b8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;">Message</p>
                    <div style="background-color:#0f172a;border-left:3px solid #38bdf8;border-radius:8px;padding:16px 20px;color:#e2e8f0;font-size:15px;line-height:1.7;">${escapeHtml(message).replaceAll('\n', '<br>')}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 32px 28px;">
                    <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:0 0 16px;">
                    <p style="margin:0;color:#64748b;font-size:12px;text-align:center;">Sent from your portfolio contact form</p>
                  </td>
                </tr>
              </table>
            </div>
            `
        });

        if (error) {
            console.error('Email send error:', error);
            return res.status(500).json({
                success: false,
                message: 'Failed to send message. Please try again later.',
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Message sent successfully!',
            id: data?.id
        });

    } catch (error) {
        console.error('Email send error:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to send message. Please try again later.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}
