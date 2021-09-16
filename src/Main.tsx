import { createTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthProvider from './store/AuthProvider';

export const theme = createTheme({
   palette: {
      primary: {
         main: '#0277BD',
      },
      secondary: {
         main: '#37474F',
      },
   },
   typography: {
      fontFamily: 'open sans',
   },
});

const Main: React.FC = () => {
   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <BrowserRouter>
            <AuthProvider>
               <App />
            </AuthProvider>
         </BrowserRouter>
      </ThemeProvider>
   );
};

export default Main;
