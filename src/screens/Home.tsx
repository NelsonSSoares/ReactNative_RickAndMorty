import { useEffect, useState } from 'react';

import {
  FlatList,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

import Card from '../components/card/Card';
import { Character } from '../constants/types/types';
import { characterService } from '../graphql/services/characterService';

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);

  async function loadCharacters() {
    try {
      const data = await characterService.getAllCharacters();
      setCharacters(data?.characters.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search Characters..."
          style={styles.input}
        />
      </View>

      <FlatList
        data={characters}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <Card character={item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
    backgroundColor: '#fff',
  },

  searchContainer: {
    marginBottom: 20,
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
  },

  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  cardWrapper: {
    width: '48%',
  },
});