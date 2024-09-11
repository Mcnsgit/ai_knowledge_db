// src/components/common/SearchBar.jsx
import { Input, Button, VStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setIsLoading(true);
      setError(null); // Clear previous errors
      try {
        const response = await axios.get(`http://localhost:3001/search?query=${searchTerm}`);
        setResults(response.data);
      } catch (err) {
        console.error("Error during search:", err);
        setError('No results found or there was a problem with the search.');
      } finally {
        setIsLoading(false);
      }
    } else {
      setError('Please enter a search term.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          mr={2}
        />
        <Button type="submit">Search</Button>
      </form>

      {isLoading && <Text>Loading...</Text>}
      {error && <Text color="red">{error}</Text>}

      {/* Safeguard: Only render results if they exist */}
      {results && (
        <VStack mt={4} spacing={2}>
          {results.docs && results.docs.length > 0 ? (
            results.docs.map(doc => (
              <Text key={doc.id}>
                <strong>Doc:</strong> {doc.title} - {doc.content}
              </Text>
            ))
          ) : (
            <Text>No documentation found.</Text>
          )}
          
          {results.faqs && results.faqs.length > 0 ? (
            results.faqs.map(faq => (
              <Text key={faq.id}>
                <strong>FAQ:</strong> {faq.question} - {faq.answer}
              </Text>
            ))
          ) : (
            <Text>No FAQs found.</Text>
          )}
        </VStack>
      )}
    </div>
  );
};

export default SearchBar;