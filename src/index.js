import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: consolas;
  }
`

const theme = {
  colors: {
    primary: 'green',
    secondary: 'blue'
  },
  media: {
    phone: '(max-width: 425px)',
    tablet: '(min-width: 425px) and (max-width: 768px)'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

