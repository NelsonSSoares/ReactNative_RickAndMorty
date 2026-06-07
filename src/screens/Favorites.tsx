import { StyleSheet, View } from 'react-native';
import ErrorComponent from '../components/errors/ErrorComponent';

export default function Favorites() {
  return (
    <View style={styles.errorContainer}>
      <ErrorComponent
        title="Favorites Screen"
        message="This is where your favorite characters will be displayed."
        titleStyle={{ fontSize: 24, color: 'blue' }}
        messageStyle={{ fontSize: 16, color: 'gray' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
/*   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  }, */
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
});