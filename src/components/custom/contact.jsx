import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.send(serviceID, templateID, formData, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;

