// src/components/common/LoadingSpinner.jsx
import React from 'react';
import { Spinner, Flex } from '@chakra-ui/react';

const LoadingSpinner = () => (
  <Flex justify="center" align="center" p={4}>
    <Spinner size="xl" />
  </Flex>
);

export default React.memo(LoadingSpinner);
