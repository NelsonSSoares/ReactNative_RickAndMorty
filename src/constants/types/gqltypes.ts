export type Character = {
  id: string;
  image: string;
  name: string;
  species: string;
  status: string;
};

export type GetAllCharactersResponse = {
  characters: {
    results: Character[];
  };
};

export type GetCharacterByIdResponse = {
  character: CharacterDetails;
};

export type CharacterDetails = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  created: string;
  location: {
    name: string;
    type: string;
  };
};
