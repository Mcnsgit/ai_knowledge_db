// src/pages/FAQ.jsx
import { Heading, Box } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';
import FAQList from '../components/docs/FAQList';

const FaQ = () => {
  return (
    <Layout>
      <Box p={4}>
        <Heading as="h1" size="xl" mb={4}>
          Frequently Asked Questions
        </Heading>
        <FAQList />
      </Box>
    </Layout>
  );
};

export default FaQ;
