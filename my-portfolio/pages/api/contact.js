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
            text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
            html: `
                <h2>New Portfolio Contact</h2>
                <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>
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
