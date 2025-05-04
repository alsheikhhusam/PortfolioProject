import { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, Link } from '@mui/material';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


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
                headers: { 'Content-Type': 'application/json' },
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

    // Handle back button click
    const router = useRouter();
    const handleBackClick = () => {
        router.back();
    };

    return (
        <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
            {/* Back Button */}
            <Box sx={{ mb: 4, textAlign: 'left' }}>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleBackClick}
                    startIcon={<ArrowBackIcon />}
                >
                </Button>
            </Box>

            {/*Header*/}
            <Typography variant="h1" gutterBottom>
                Contact Me
            </Typography>

            <Typography variant='body1' sx={{ mb: 4 }} color="text.secondary">
                Feel free to reach me over {' '}
                
                <Link
                    href="https://www.linkedin.com/in/husam-alsheikh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ color: 'primary.main', fontWeight: 'bold' }}
                >
                    LinkedIn
                </Link>
                
                {' '} or send me a message below!
                
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

                <Button type="submit" variant="contained" color="primary" sx={{ py: 1.5, fontSize: '1rem', fontWeight: 'bold' }}>
                    Send Message
                </Button>
            </Box>
            {showMessage && (
                <Typography
                    variant="body2"
                    sx={{
                        mt: 2,
                        color: responseMessage.includes('successfully') ? 'green' : 'red',
                        opacity: fadeOut ? 0 : 1,
                        transition: 'opacity 3s ease-in-out',
                    }}
                >
                    {responseMessage}
                </Typography>
            )}
        </Container>
    );
}
