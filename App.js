/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { ApolloProvider } from 'react-apollo';

import apolloClient from './app/src/config/apollo';
import MainScreen from './app/src/ui/MainScreen';

export default () => (
  <ApolloProvider client={apolloClient}>
    <MainScreen />
  </ApolloProvider>
);
