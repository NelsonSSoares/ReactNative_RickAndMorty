import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../constants/types/types';

interface FavoriteState {
  items: Record<string, Character>;
}

const initialState: FavoriteState = {
  items: {},
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Character>) {
      const character = action.payload;
      if (state.items[character.id]) {
        delete state.items[character.id];
      } else {
        state.items[character.id] = character;
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;