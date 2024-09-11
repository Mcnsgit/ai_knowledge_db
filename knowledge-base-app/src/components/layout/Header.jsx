import  {memo} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Heading, HStack,Link } from '@chakra-ui/react';
import SearchBar from '../common/SearchBar';

const Header = () => {
    return (
        <Flex as="header" bg="blue.500" p={4} color="white" justify="space-between" align="center">
          <Heading as="h1" size="lg">Knowledge Base</Heading>
          <HStack spacing={4}>
            <Link as={RouterLink} to="/">Home</Link>
            <Link as={RouterLink} to="/docs">Docs</Link>
            <Link as={RouterLink} to="/faq">FAQs</Link>
            <Link as={RouterLink} to="/editor">Editor</Link> 
          </HStack>
          <SearchBar />
        </Flex>
      );
    };
    
    export default memo(Header);