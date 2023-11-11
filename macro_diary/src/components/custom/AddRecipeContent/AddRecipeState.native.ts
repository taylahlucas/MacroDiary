import { createSlice } from '@reduxjs/toolkit';

export interface AddRecipeState {
  readonly searchText: string;
  readonly name: string;
  readonly servingSize: number;
  readonly ingredients: string[];
}

export const initialState: AddRecipeState = {
  searchText: '',
  name: '',
  servingSize: 1,
  ingredients: []
}

const slice = createSlice({
  name: 'addRecipe',
  initialState: initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setRecipeName: (state, action) => {
      state.name = action.payload;
    },
    setServingSize: (state, action) => {
      state.servingSize = action.payload
    },
    setIngredients: (state, action) => {
      state.ingredients = action.payload
    }
  }
});

export const {
  setSearchText,
  setRecipeName,
  setServingSize,
  setIngredients
} = slice.actions;
export default slice.reducer;