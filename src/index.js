import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    main: '#8bc3e5',
    mainDark: '#324b5a',
    dark: '#202528',
    // darker: '#16191b',
    darker: '#1c1d20',
    light: '#e1e4e2',
    disabled: '#868b8e',
    // main: '#CE7777',
    // dark: '#2B3A55',
    // darker: '#E8C4C4',
    // light: '#F2E5E5',
    //    favorite so far new
    // main: '#FCE9F1',
    // darker: '#F1D4E5',
    // dark: '#080202',
    // light: '#73BBC9',
    //    favorite so far
    // lighter: '#474973',
    // main: '#a69cac',
    // light: '#f1dac4',
    // dark: '#161b33',
    // darker: '#0d0c1d',
    // comp: '#9C6968',
    // dark: '#335c67',
    // main: '#fff3b0',
    // light: '#e09f3e',
    // lighter: '#9e2a2b',
    // darker: '#540b0e',
    // comp: '#9C6968',
    // main: '#0a0908',
    // light: '#22333b',
    // dark: '#eae0d5',
    // lighter: '#c6ac8f',
    // darker: '#5e503f',
    // comp: '#9C6968',
    //    original
    // main: '#689B9C',
    // light: '#f5f6ff',
    // dark: '#111',
    // lighter: '#2c3a3b',
    // darker: '#151f1f',
    // comp: '#9C6968',
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
