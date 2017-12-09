import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default new ApolloClient({
  link: new HttpLink({ uri: 'https://immense-woodland-35196.herokuapp.com/' }),
  cache: new InMemoryCache(),
});
