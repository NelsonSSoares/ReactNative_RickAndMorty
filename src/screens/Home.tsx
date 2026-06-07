import { useEffect, useState } from 'react';

import {
  FlatList,
  StyleSheet,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import Card from '../components/card/Card';
import { Character } from '../constants/types/types';
import { characterService } from '../graphql/services/characterService';
import ErrorComponent from '../components/errors/ErrorComponent';

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);

  async function loadCharacters(name: string) {
    setLoading(true);
    try {
      const data = await characterService.getAllCharacters(1, name);
      const charactersData = data.characters as {
        results: Character[];
        info?: { next?: number };
      };
      setCharacters(charactersData.results);
      setPage(1);
      setHasNextPage(!!charactersData.info?.next);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function loadMore() {
    if (!hasNextPage || loading) return;

    const nextPage = page + 1;
    setLoading(true);
    try {
      const data = await characterService.getAllCharacters(nextPage, search);
      const charactersData = data.characters as {
        results: Character[];
        info?: { next?: number };
      };
      setCharacters(prev => [...prev, ...charactersData.results]);
      setPage(nextPage);
      setHasNextPage(!!charactersData.info?.next);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      loadCharacters(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search Characters..."
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {search && characters.length === 0 && !loading && 
        <ErrorComponent 
          title="404 - Not Found" 
          message="No characters found."
          titleStyle={{ fontSize: 24, color: 'red' }}
          messageStyle={{ fontSize: 16, color: 'gray' }}
        />
      }
      <FlatList
        data={characters}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 40 }}
        onEndReached={loadMore}
        onEndReachedThreshold={0.3}
        ListFooterComponent={loading ? <ActivityIndicator /> : null}
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
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 15,
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
