import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { FlatList, StyleSheet, View } from 'react-native';
import Card from '../components/card/Card';
import ErrorComponent from '../errors/ErrorComponent';

export default function Favorites() {
  const favoritesMap = useSelector((state: RootState) => state.favorites.items);
  const favorites = Object.values(favoritesMap);

  if (favorites.length === 0) {
    return <ErrorComponent title="No favorites yet" message="..." />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 40 }}
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

  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  cardWrapper: {
    width: '48%',
  },
});