import React from 'react';
import {useQuery} from '@apollo/react-hooks';
// import {useQuery} from '@apollo/client';
import { GET_POKEMONS } from '../graphql/get-pokemon';
import { Pokemon } from '../components/Pokemon'; 
// export const PokemonsContainer = () => {}

export function PokemonsContainer() {
    const { data: {pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 1118},
    });

    return (
        <div className="container">
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
    )
}