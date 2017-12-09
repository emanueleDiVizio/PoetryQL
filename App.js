/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { StyleSheet, Text, View } from 'react-native';

import apolloClient from './app/src/config/apollo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => (
  <ApolloProvider client={apolloClient}>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
    </View>
  </ApolloProvider>
);
