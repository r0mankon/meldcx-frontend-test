import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core';
import AuthProvider from './store/AuthProvider';
import { theme } from './Main';
import { BrowserRouter } from 'react-router-dom';

const Providers: React.FC = ({ children }) => {
   return (
      <ThemeProvider theme={theme}>
         <BrowserRouter>
            <AuthProvider>{children}</AuthProvider>
         </BrowserRouter>
      </ThemeProvider>
   );
};

const customRender = (ui, options) =>
   render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
