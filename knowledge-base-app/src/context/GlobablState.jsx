// src/context/GlobalState.js
import React, { createContext, useState } from 'react';
import axios from 'axios';


// Create Context
export const GlobalContext = createContext();

// Create Provider component
export const GlobalProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [docs, setDocs] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [faqs, setFaqs] = useState([]);
    const [folders, setFolders] = useState([]);
    const login = async (email, password) => {
        setLoading(true);
        try {
            const { data } = await axios.post('http://localhost:1337/api/auth/local', {
                identifier: email,
                password
            });
            setUser(data.user);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
    };

    const fetchDocs = async () => {
        const { data } = await axios.get('http://localhost:1337/api/docs');
        setDocs(data);
    };

    const fetchFolders = async () => {
        const { data } = await axios.get('http://localhost:1337/api/folders');
        setFolders(data);
    };
    const fetchFaqs = async () => {
        const response = await axios.get('http://localhost:3001/faqs');
        setFaqs(response.data);
    };

    return (
        <GlobalContext.Provider value={{ docs, faqs, fetchDocs, fetchFaqs, fetchFolders, login, logout, user, isLoading ,folders}}>
            {children}
        </GlobalContext.Provider>
    );
};