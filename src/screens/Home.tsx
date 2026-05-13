import { useEffect, useState } from 'react';

import {
  FlatList,
  Image,
  Text,
  View,
} from 'react-native';

import {
  characterService,
} from '../graphql/services/characterService';
import { Character } from '../constants/types/types';


export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);

  async function loadCharacters() {
    try {
      const data = await characterService.getAllCharacters();
      setCharacters(data?.characters.results);
      console.log("FUNCIONOU REQUEST? ",data?.characters.results);
      
    
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadCharacters();
  }, []);

  return (

    <View>
        <Text>TESTEEEEEEEEEEEEEE</Text>
        <Text>TESTEEEEEEEEEEEEEEEEEEEEEEEE</Text>
        <Text>TESTEEEEEEEEEEEEEE</Text>
        <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View
            style={{
                marginBottom: 20,
                alignItems: 'center',
            }}
            >
            <Image
                source={{ uri: item.image }}
                style={{
                width: 120,
                height: 120,
                borderRadius: 10,
                }}
            />

            <Text>{item.name ?? "Unknown"}</Text>

            <Text>{item.species ?? "Unknown"}</Text>

            <Text>{item.status ?? "Unknown"}</Text>

            </View>
            
        )}
        />
    </View>
  );
}