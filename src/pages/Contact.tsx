import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { businessEmail } from '../util/util';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const mailtoLink = `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${tel}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                mt: 3,
                maxWidth: '600px',
                mx: 'auto',
                p: { xs: 2, sm: 3 },
                boxShadow: { xs: 1, sm: 3 },
                borderRadius: 2,
                bgcolor: 'background.paper',
            }}
        >
            <Typography variant="h6" gutterBottom textAlign="center">
                Contact Us
            </Typography>
            <TextField
                label="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                required
                margin="normal"
                variant="outlined"
            />
            <TextField
                label="Your Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
                margin="normal"
                variant="outlined"
            />
            <TextField
                label="Your Phone Number"
                type="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
            />
            <TextField
                label="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                fullWidth
                required
                margin="normal"
                variant="outlined"
            />
            <TextField
                label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
                required
                multiline
                rows={4}
                margin="normal"
                variant="outlined"
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2, width: '100%' }}
            >
                Send
            </Button>
        </Box>
    );
};

export default Contact;
