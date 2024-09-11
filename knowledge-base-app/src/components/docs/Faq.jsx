// src/components/FAQ.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FAQ = () => {
    const [faqs, setFaqs] = useState([]);
    
    useEffect(() => {
        // Fetch FAQ data from the backend
        axios.get('http://localhost:3001/faqs')
            .then(response => setFaqs(response.data))
            .catch(error => console.error('Error fetching FAQs:', error));
    }, []);
    
    return (
        <div>
            <h1>Frequently Asked Questions</h1>
            <ul>
                {faqs.map(faq => (
                    <li key={faq.id}>
                        <h2>{faq.question}</h2>
                        <p>{faq.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQ;