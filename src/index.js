import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    main: '#689B9C',
    comp: '#9C6968',
    light: '#f5f6ff',
    dark: '#111',
    mainDark1: '#2c3a3b',
    mainDark2: '#151f1f'
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif"
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
