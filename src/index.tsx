import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { App } from './App';
import { client } from './client';
import { ModeProvider } from './contexts';

ReactDOM.render(
  <ModeProvider>
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  </ModeProvider>,
  document.getElementById('root')
);
