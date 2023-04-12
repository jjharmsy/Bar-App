import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';
import App from './App';

const client = new ApolloClient({
    uri: 'https://localhost:3000/graphql',
    cache: new InMemoryCache(),
  });

const VERIFY_LOGIN = gql`
  query verify_login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      password
      status
    }
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);