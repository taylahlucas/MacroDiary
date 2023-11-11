import { useSelector } from 'react-redux';
import { StoreState } from  '@utils/CustomInterfaces.native';
import { AddRecipeState } from '../AddRecipeState.native';

const useAddRecipeState = (): AddRecipeState => {
  return useSelector((state: StoreState) => state.addRecipe);
}

export default useAddRecipeState;