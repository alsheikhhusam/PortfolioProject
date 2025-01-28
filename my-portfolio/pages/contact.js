import { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

//TODO: Re Captcha - https://github.com/alsheikhhusam/PortfolioProject/issues/2

export default function Contact() {
    //  State Management
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [responseMessage, setResponseMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [showMessage, setShowMessage] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    //  Updates state if change is detected
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    //  Data Validation
    const validateForm = () => {
        const newErrors = {};

        if (!form.name) newErrors.name = 'Name is required';

        if (!form.email) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
          newErrors.email = 'Email address is invalid';
        }

        if (!form.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    //  Sends form data to API route via POST request
    const handleSubmit = async (e) => {
        e.preventDefault();

        //  Validate Form
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) { 
            setErrors(validationErrors);
            return;
        }

        try {   //  Send API request via fetch (JSON format)
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(form),
        });

        //  Display response
        const data = await res.json();
        setResponseMessage(data.message);
        setShowMessage(true);
        setFadeOut(false);
        setForm({ name: '', email: '', message: '' });  //  Clear form on success
        setErrors({});
        } catch (error) {   //  ERROR catching
            console.error('Error submitting form:', error);
            setResponseMessage('Something went wrong. Please try again later.');
            setShowMessage(true);
            setFadeOut(false);
        }
    };

    //  Clears message after timeout
    useEffect(() => {
        if (showMessage) {
            const fadeTimer = setTimeout(() => setFadeOut(true), 2000); // Start fading out after 2 seconds
            const hideTimer = setTimeout(() => setShowMessage(false), 5000); // Hide message completely after 5 seconds
            return () => {
                clearTimeout(fadeTimer);
                clearTimeout(hideTimer);
          };
        }
      }, [showMessage]);

    return (
        <Container maxWidth="sm" sx={{ py: 8 }}>

            <Typography variant="h2" gutterBottom>
                Contact Me
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    fullWidth
                />

                <TextField
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    fullWidth
                />

                <TextField
                    label="Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    fullWidth
                    multiline
                    rows={4}
                />

                <Button type="submit" variant="contained" color="primary">
                    Send Message
                </Button>
            </Box>
            {showMessage && (
                <Typography
                variant="body2"
                sx={{
                    mt: 2,
                    color: responseMessage.includes('successfully') ? 'green' : 'red', // Green for success, red for errors
                    opacity: fadeOut ? 0 : 1, // Gradual fade out
                    transition: 'opacity 3s ease-in-out', // Slow fade out over 3 seconds
                }}
                >
                {responseMessage}
                </Typography>
            )}
        </Container>
    );
}
