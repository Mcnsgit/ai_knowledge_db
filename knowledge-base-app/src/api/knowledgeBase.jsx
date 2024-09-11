import axios from 'axios';


// Define the base URL for the backend (FastAPI or Strapi)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

/**
 * Fetch all documentation articles from the backend
 */
export const fetchDocs = async () => {
    try {
      const response = await axios.get(`${API_URL}/docs`);
      return response.data;
    } catch (error) {
      console.error('Error fetching documentation:', error);
      throw new Error('Could not fetch documentation');
    }
  };
  
  /**
   * Fetch all FAQs from the backend
   */
  export const fetchFAQs = async () => {
    try {
      const response = await axios.get(`${API_URL}/faqs`);
      return response.data;
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      throw new Error('Could not fetch FAQs');
    }
  };
  
  /**
   * Fetch a single document by its ID
   * @param {string} docId - The ID of the document to fetch
   */
  export const fetchDocById = async (docId) => {
    try {
      const response = await axios.get(`${API_URL}/docs/${docId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching document with ID ${docId}:`, error);
      throw new Error(`Could not fetch document with ID ${docId}`);
    }
  };