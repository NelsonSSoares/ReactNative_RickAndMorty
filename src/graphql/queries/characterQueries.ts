import { gql } from '@apollo/client';
/* 
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
`; */

export const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        next
      }
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
      image
      species
      type
      gender
      created
      location {
        name
        type
      }
    }
  }
`;