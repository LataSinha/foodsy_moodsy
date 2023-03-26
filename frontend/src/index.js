import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider,createTheme } from '@material-ui/core';
import './fonts/Gotham-Bold.otf';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme = {theme}>
    <App />
    </ThemeProvider>

);
reportWebVitals();
