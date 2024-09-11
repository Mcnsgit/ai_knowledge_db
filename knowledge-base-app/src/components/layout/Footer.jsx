import {Box, Text} from  '@chakra-ui/react';

const Footer = () => (
    <Box as="footer" bg="gray.800" color="white" p={4} textAlign="center">
    <Text>&copy; {new Date().getFullYear()} Knowledge Base. All rights reserved.</Text>
  </Box>
);

export default Footer;