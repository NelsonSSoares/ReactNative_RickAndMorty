import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { BASE_URL } from '../constants/api';

const httpLink = new HttpLink({
  uri: BASE_URL,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});