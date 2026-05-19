import { gql } from '@apollo/client';

export const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters {
     characters {
        results {
        id
        image
        name
        species
        status
        }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      created
      location {
        name
      }
    }
  }
`;