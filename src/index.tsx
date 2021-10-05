import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from 'styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    {/* TODO: Theme 정의해서 ThemeProvider 추가하기  */}
    <GlobalStyle />
    <App />
  </BrowserRouter>,

  document.getElementById('root'),
);
