/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { theme } from '../styles/theme'
import { ThemeProvider } from 'styled-components';
import AuthProvider from '../hooks/useAuth';
import AppRoutes from '../routes/AppRoutes';
import GlobalStyle from '../styles/global';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  </AuthProvider>,
);
