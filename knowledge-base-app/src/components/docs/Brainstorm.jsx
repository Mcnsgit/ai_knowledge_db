// src/components/Brainstorm.js
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchBrainstorms = async () => {
    const { data } = await axios.get('http://localhost:1337/api/brainstorms');
    return data;
};

const Brainstorm = () => {
    const { data: brainstorms, isLoading, error } = useQuery('brainstorms', fetchBrainstorms);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading brainstorms: {error.message}</p>;

    return (
        <div>
            <h1>Brainstorm Ideas</h1>
            <ul>
                {brainstorms.data.map(brainstorm => (
                    <li key={brainstorm.id}>
                        <h2>{brainstorm.attributes.title}</h2>
                        <p>{brainstorm.attributes.idea}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Brainstorm;