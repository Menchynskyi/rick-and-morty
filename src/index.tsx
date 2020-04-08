import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { SkeletonTheme } from 'react-loading-skeleton';
import { App } from './App';
import { client } from './client';
import { Theme } from './components';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <Theme>
          <SkeletonTheme color="#2E2E2E" highlightColor="#303030">
            <App />
          </SkeletonTheme>
        </Theme>
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
