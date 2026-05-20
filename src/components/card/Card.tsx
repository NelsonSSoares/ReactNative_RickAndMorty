import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Character } from '../../constants/types/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/types/RootStackParamList';
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Card({ character }: { character: Character }) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('CharacterDetails' , { id: character.id   })}>
      
      <View style={styles.container}>
        <Image
          source={{ uri: character.image }}
          style={styles.img}
        />

        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Name:</Text>

            <Text
              numberOfLines={2}
              style={styles.value}>
              {character.name}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Species:</Text>

            <Text style={styles.value}>
              {character.species}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Status:</Text>

            <Text
              style={[
                styles.value,
                {
                  color:
                    character.status === 'Alive'
                      ? 'green'
                      : character.status === 'Dead'
                      ? 'red'
                      : 'gray',
                  fontWeight: 'bold',
                },
              ]}>
              {character.status}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    borderWidth: 2,
    borderColor: '#dcdcdc',
    borderRadius: 16,
    padding: 12,
    backgroundColor: '#fff',
    elevation: 5,
  },

  img: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 12,
  },

  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  label: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  value: {
    flex: 1,
    textAlign: 'right',
    fontSize: 15,
    color: '#555',
    marginLeft: 10,
  },
});