// src/pages/Home.jsx
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Box textAlign="center" mt={10}>
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to the Knowledge Base
        </Heading>
        <Text fontSize="lg" mb={6}>
          Access product documentation, FAQs, brainstorms, and code snippets in one place.
        </Text>
        <Button as={RouterLink} to="/docs" colorScheme="blue" size="lg">
          Get Started
        </Button>
      </Box>
    </Layout>
  );
};

export default Home;
