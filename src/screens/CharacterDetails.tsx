import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../routes/types/RootStackParamList';
import { useEffect, useState } from 'react';
import { characterService } from '../graphql/services/characterService';

type RouteProps = RouteProp<RootStackParamList, 'CharacterDetails'>;

export default function CharacterDetails() {
  const route = useRoute<RouteProps>();
  const { id } = route.params;
  const [character, setCharacter] = useState<any>(null);

  async function loadCharacterDetails() {
    try {
      
      const data = await characterService.getCharacterById(id);
      console.log('Character Details:', data);
      setCharacter(data?.character);
      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadCharacterDetails();
    console.log('Character ID:', id);
    
  }, [id]);

  return (
    <View>
      <Text>{character?.name }</Text>
      <Text>{character?.status }</Text>
      <Text>{character?.species }</Text>
      <Text>{character?.type }</Text>
      <Text>{character?.gender }</Text>
      <Text>{character?.created }</Text>
      <Text>{character?.location?.name }</Text>
    </View>
  );
}