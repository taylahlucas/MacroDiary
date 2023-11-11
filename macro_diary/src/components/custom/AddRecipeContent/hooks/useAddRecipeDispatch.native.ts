import { Dispatch } from 'redux';
import { useAppDispatch } from '@redux/store.native';
import {
  setSearchText,
  setRecipeName,
  setServingSize,
  setIngredients
} from '../AddRecipeState.native';

interface AddRecipeDispatch {
  setSearchText: (value: string) => void;
  setRecipeName: (value: string) => void;
  setServingSize: (value: number) => void;
  setIngredients: (value: string[]) => void;
}

const useAddRecipeDispatch = (): AddRecipeDispatch => {
  const dispatch: Dispatch = useAppDispatch();
  
  return {
    setSearchText(value: string): void {
      dispatch(setSearchText(value));
    },
    setRecipeName(value: string): void {
      dispatch(setRecipeName(value));
    },
    setServingSize(value: number): void {
      dispatch(setServingSize(value));
    },
    setIngredients(value: string[]): void {
      dispatch(setIngredients(value));
    }
  }
}

export default useAddRecipeDispatch;