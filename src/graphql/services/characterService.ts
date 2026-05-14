import { GetAllCharactersResponse, GetCharacterByIdResponse } from "../../constants/types/gqltypes"
import { client } from "../client"
import { GET_ALL_CHARACTERS, GET_CHARACTER_BY_ID } from "../queries/characterQueries"


export const characterService ={
    async getAllCharacters(): Promise<GetAllCharactersResponse>{
        const {data} = await client.query<GetAllCharactersResponse>({
            query: GET_ALL_CHARACTERS
        }) 

        return data!
    },

    async getCharacterById(id: string): Promise<GetCharacterByIdResponse>{
        const {data} = await client.query<GetCharacterByIdResponse>({
            query: GET_CHARACTER_BY_ID,
            variables: {id}
        })
        return data!
    }
}