import { Heading, Box } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';
import DocumentationList from '../components/docs/DocumentatonList';

const Docs = () => {
  return (
    <Layout>
      <Box p={4}>
        <Heading as="h1" size="xl" mb={4}>
          Documentation
        </Heading>
        <DocumentationList />
      </Box>
    </Layout>
  );
};

export default Docs;