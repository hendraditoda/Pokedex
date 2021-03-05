import React from 'react';
import { useQuery } from '@apollo/client';
import { Todos } from '../graphql/get-pokemon';
import { Pokemon } from '../components/Pokemon';

export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(Todos, {
    variables: { first: 9 },
  });

  return (
    <div className="container">
      {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
    </div>
  )
}
