import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../routes/types/RootStackParamList';
import { useEffect, useState } from 'react';
import { characterService } from '../graphql/services/characterService';
import type { CharacterDetails } from '../constants/types/types';
import { Image } from 'react-native';

type RouteProps = RouteProp<RootStackParamList, 'CharacterDetails'>;

export default function CharacterDetails() {
  const route = useRoute<RouteProps>();
  const { id } = route.params;
  const [character, setCharacter] = useState<CharacterDetails>();

  async function loadCharacterDetails() {
    try {
      const data = await characterService.getCharacterById(id);
      console.log("DATA: ",data);
      
      setCharacter(data?.character);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadCharacterDetails();
  }, [id]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: character?.image }} style={{ width: 200, height: 200 }} />
      <Text>{character?.name }</Text>
      <Text>{character?.status }</Text>
      <Text>{character?.species }</Text>
      <Text>{character?.type }</Text>
      <Text>{character?.gender }</Text>
      <Text>{character?.created }</Text>
      <Text>{character?.location?.name }</Text>
      <Text>{character?.location?.type }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});