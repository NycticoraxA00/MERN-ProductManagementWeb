import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
const theme = extendTheme({
  config: {
    initialColorMode: 'dark', // Set the initial color mode to dark
    useSystemColorMode: false, // Disable system color mode
  },
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
)
