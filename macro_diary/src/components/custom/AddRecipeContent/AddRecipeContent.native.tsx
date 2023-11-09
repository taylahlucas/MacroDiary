import React from 'react';
import useMainDispatch from '@redux/hooks/useMainDispatch.native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import Button from '@components/general/Buttons/Button.native';
import CustomSearchBarWithBarcode from '@components/general/CustomSearchBar/CustomSearchBarWithBarcode.native';
import AddRecipeContentServingSize from './AddRecipeContentServingSize.native';
import Spacing from '@components/general/Spacing.native';
import { AddRecipeContainer, AddRecipeContentContainer, AddRecipeContentInnerContainer } from './AddRecipeContentStyledComponents.native';
import TextField from '@components/general/TextField/TextField.native';
import AddRecipeContentIngredients from './AddRecipeContentIngredients.native';

const AddRecipeContent = () => {
  const theme = useGetTheme();
  const { setShowAddRecipeModal } = useMainDispatch();
  
  return (
    <AddRecipeContainer color={theme.black}>
      <AddRecipeContentContainer>
        <Spacing height={32} />
        <CustomSearchBarWithBarcode />
        <AddRecipeContentInnerContainer>
          <TextField placeholder={'recipe name'} />
          <AddRecipeContentServingSize />
          <AddRecipeContentIngredients />
        </AddRecipeContentInnerContainer>
        <Button type='Exit' onPress={(): void => setShowAddRecipeModal(false)} />
      </AddRecipeContentContainer>
    </AddRecipeContainer>
  );
};

export default AddRecipeContent;