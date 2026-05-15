import { useEffect, useState } from 'react';

import {
  FlatList,
  StyleSheet,
  View
} from 'react-native';

import Card from '../components/card/Card';
import { Character } from '../constants/types/gqltypes';
import {
  characterService,
} from '../graphql/services/characterService';


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

    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    },
});