import gql from 'graphql-tag';
// import gql from '@apollo/client';

export const GET_POKEMONS = gql`
    query pokemons($first: Int!){
        pokemons(first: $first){
            id
            name
            image
            maxHP
            maxCP
            attacks {
                special {
                    name
                    damage
                }
            }
        }
    }
`;

// query pokemons($first: Int!){
//     pokemons(first: $first){
//         id
//         name
//         image
//         maxHP
//         maxCP
//         attacks {
//             special {
//                 name
//                 damage
//             }
//         }
//     }
// }