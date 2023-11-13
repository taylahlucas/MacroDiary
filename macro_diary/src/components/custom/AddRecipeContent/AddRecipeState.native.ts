import { createSlice } from '@reduxjs/toolkit';

export interface AddRecipeState {
  readonly searchText: string;
  readonly name: string;
  readonly isServingSizeDropdownOpen: boolean;
  readonly servingSize: number;
  readonly ingredients: string[];
}

export const initialState: AddRecipeState = {
  searchText: '',
  name: '',
  isServingSizeDropdownOpen: false,
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
    triggerServingSizeDropdown: (state, action) => {
      state.isServingSizeDropdownOpen = action.payload;
    },
    setServingSize: (state, action) => {
      state.servingSize = action.payload;
    },
    setIngredients: (state, action) => {
      state.ingredients = action.payload;
    }
  }
});

export const {
  setSearchText,
  setRecipeName,
  triggerServingSizeDropdown,
  setServingSize,
  setIngredients
} = slice.actions;
export default slice.reducer;