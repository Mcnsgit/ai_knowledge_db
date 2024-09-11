import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <>
    <Header />
    <Box as="main" p={4}>
      {children} {/* Only render the dynamic content here */}
    </Box>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children are required
};

export default Layout;