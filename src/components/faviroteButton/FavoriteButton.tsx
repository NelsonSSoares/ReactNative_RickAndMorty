import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { toggleFavorite } from '../../redux/favoriteSlice';
import { Character } from '../../constants/types/types';

export default function FavoriteButton({ character }: { character: Character }) {
  const dispatch = useDispatch();

  const isFavorite = useSelector((state: RootState) =>
    Boolean(state.favorites.items[character.id])
  );

  return (
    <TouchableOpacity onPress={() => dispatch(toggleFavorite(character))} style={{ padding: 8 }}>
      <Icon
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={24}
        color={isFavorite ? 'red' : '#9E9E9E'}
      />
    </TouchableOpacity>
  );
}