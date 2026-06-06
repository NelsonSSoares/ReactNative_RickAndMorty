import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function FavoriteButton({ id }: { id: string }) {
  return (
    <TouchableOpacity style={{ padding: 8 }}>
      <Icon name="heart" size={24} color="red" />
    </TouchableOpacity>
  );
}
