import { GetAllCharactersResponse, GetCharacterByIdResponse } from "../../constants/types/types"
import { client } from "../client"
import { GET_ALL_CHARACTERS, GET_CHARACTER_BY_ID } from "../queries/characterQueries"


export const characterService ={
    async getAllCharacters(page: number = 1, name?: string): Promise<GetAllCharactersResponse>{
        const {data} = await client.query<GetAllCharactersResponse>({
            query: GET_ALL_CHARACTERS,
            variables: {page, name}
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