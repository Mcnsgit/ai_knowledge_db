// src/components/common/ErrorMessage.jsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => (
  <Box color="red.500" p={4}>
    <Text>{message}</Text>
  </Box>
);

ErrorMessage.propTypes = {
  message: PropTypes.string,
};
export default React.memo(ErrorMessage);
