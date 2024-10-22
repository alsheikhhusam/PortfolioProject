export default async function handler(req, res) {
    if (req.method === 'POST') {    //  Only allow POST requests
        const { name, email, message } = req.body;
        
        //TODO    simulate sending an email
        console.log('Contact form submitted:', { name, email, message });
    
        //    Return 200
        res.status(200).json({ success: true, message: 'Form submitted successfully!' });
    } else {    //  If not POST then throw 405 error
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  