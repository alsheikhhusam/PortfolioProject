import nodemailer from 'nodemailer';

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

    if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD || !process.env.RECEIVER_EMAIL) {
        console.error('Email configuration missing:', {
            hasEmail: !!process.env.EMAIL,
            hasPassword: !!process.env.EMAIL_PASSWORD,
            hasReceiver: !!process.env.RECEIVER_EMAIL
        });
        return res.status(500).json({ 
            success: false, 
            message: 'Server configuration error' 
        });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.EMAIL}>`,
            replyTo: email,
            to: process.env.RECEIVER_EMAIL,
            subject: `New message from ${name} (Portfolio Contact)`,
            text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
            html: `
                <h2>New Portfolio Contact</h2>
                <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        
        return res.status(200).json({ 
            success: true, 
            message: 'Message sent successfully!' 
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
  