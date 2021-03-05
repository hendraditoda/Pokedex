import React from 'react';
import { gql, useQuery } from '@apollo/client';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client';
import {onError} from '@apollo/client/link/error'
import { PokemonsContainer } from './containers/PokemonContainer';
       
function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app',
    // credentials: 'omit',
    // cache: new InMemoryCache()
  });
  
  return (
    <ApolloProvider client={client}>
      <PokemonsContainer />
    </ApolloProvider>
  );
}

export default App;
