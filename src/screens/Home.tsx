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
import { Character } from '../constants/types/gqltypes';
import Card from '../components/card/Card';


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

    <View style={{
      flex: 1,
      padding: 20,

    }}>
        <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View style={styles.container}>
                <Card character={item} />
            </View>
        )}
        />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 20,
    },
}