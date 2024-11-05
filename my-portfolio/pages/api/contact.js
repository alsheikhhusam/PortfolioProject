import nodemailer from 'nodemailer';

//TODO: Add verify service health here - https://github.com/alsheikhhusam/PortfolioProject/issues/2

export default async function handler(req, res) {
    if (req.method === 'POST') {    //  Only allow POST requests
        const { name, email, message } = req.body;

        //  Create a nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        //  Populate Email
        const mailOptions = {
            from: email,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Portfolio Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        //  Send Email
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true, message: 'Message sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, message: 'Error sending message. Please try again later.' });
        }
    } else {    //  If not POST then throw 405 error
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  