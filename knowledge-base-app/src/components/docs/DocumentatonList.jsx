import React, { useContext } from 'react';
import axios from 'axios';
import { Box, Text } from '@chakra-ui/react';
// import { GlobalContext } from '../../context/GlobalState';
import { useQuery } from '@tanstack/react-query';
import DocumentationItem from './DocumentationItem';
import LoadingSpinner from '../common/LoadingSpinner';
import Documentation from './Documentation';

// Fetch documents from the API
const fetchDocs = async () => {
  const response = await axios.get('http://localhost:3001/docs');
  return response.data;
};

const DocumentationList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['docs'],
    queryFn: fetchDocs,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  // Handle loading and error states
  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Error loading documentation: {error.message}</p>;

  const docsData = Array.isArray(data) ? data : data.docs || [];

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>Documentation</Text>   
      <Documentation />  {/* Folder organization and document upload form */}
      
      <div className="docs-list">
        {docsData.length > 0 ? (
          docsData.map((doc) => (
            <DocumentationItem key={doc.id} doc={doc} />
          ))
        ) : (
          <Text>No documentation available.</Text>
        )}
      </div>
    </Box>
  );
};

export default DocumentationList;