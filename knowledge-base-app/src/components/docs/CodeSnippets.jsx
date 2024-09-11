// src/components/CodeSnippets.js
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSnippets = async () => {
    const { data } = await axios.get('http://localhost:3001/api/snippets');
    return data;
};

const CodeSnippets = () => {
    const { data: snippets, isLoading, error } = useQuery('snippets', fetchSnippets);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading snippets: {error.message}</p>;

    return (
        <div>
            <h1>Code Snippets</h1>
            <ul>
                {snippets.data.map(snippet => (
                    <li key={snippet.id}>
                        <h2>{snippet.attributes.title}</h2>
                        <pre>{snippet.attributes.code}</pre>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CodeSnippets;