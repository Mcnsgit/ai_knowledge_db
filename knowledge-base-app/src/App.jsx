// src/App.jsx
import React from 'react';
import { GlobalProvider } from './context/GlobablState.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from './AppRouter';
import theme from './theme.js';
import ErrorBoundary from './components/common/ErrorBoundary.jsx';

const queryClient = new QueryClient();

const App = () => {
  return (
    <GlobalProvider>
    <ErrorBoundary>
      
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <AppRouter />
      </ChakraProvider>
    </QueryClientProvider>
      </ErrorBoundary>
    </GlobalProvider>
  );
};

export default App;
