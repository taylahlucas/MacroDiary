import React from 'react';
import useMainDispatch from '@redux/hooks/useMainDispatch.native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import CustomSearchBarWithBarcode from '@components/general/CustomSearchBar/CustomSearchBarWithBarcode.native';
import AddRecipeServingSize from './AddRecipeServingSize.native';
import Spacing from '@components/general/Spacing.native';
import { 
  AddRecipeContainer, 
  AddRecipeContentContainer, 
  AddRecipeInnerContainer
} from './AddRecipeStyledComponents.native';
import TextField from '@components/general/TextField/TextField.native';
import AddRecipeIngredients from './AddRecipeIngredients.native';
import AddRecipeButtons from './AddRecipeButtons.native';
import useAddRecipeDispatch from './hooks/useAddRecipeDispatch.native';
import useAddRecipeState from './hooks/useAddRecipeState.native';

const AddRecipeContent = () => {
  const theme = useGetTheme();
  const { setRecipeName } = useAddRecipeDispatch();
  const { name } = useAddRecipeState();
  
  
  return (
    <AddRecipeContainer backgroundColor={theme.black}>
      <AddRecipeContentContainer>
        <Spacing height={32} />
        <CustomSearchBarWithBarcode />
        <AddRecipeInnerContainer>
          <TextField 
            placeholder={'recipe name'}
            value={name}
            onChangeText={(value: string) => setRecipeName(value)}
          />
          <AddRecipeServingSize />
          <AddRecipeIngredients />
        </AddRecipeInnerContainer>
      </AddRecipeContentContainer>
      <AddRecipeButtons />
    </AddRecipeContainer>
  );
};

export default AddRecipeContent;