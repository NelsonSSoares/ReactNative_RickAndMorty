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
  character: Character;
};
