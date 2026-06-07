import { StyleSheet, View } from 'react-native';
import ErrorComponent from '../errors/ErrorComponent';

export default function Profile() {
  return (
    <View style={styles.errorContainer}>
      <ErrorComponent
        title="Profile Screen"
        message="This is where your profile information will be displayed."
        titleStyle={{ fontSize: 24, color: 'blue' }}
        messageStyle={{ fontSize: 16, color: 'gray' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
});