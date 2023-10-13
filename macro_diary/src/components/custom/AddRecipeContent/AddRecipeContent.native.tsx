import React from 'react';
import useMainDispatch from '../../../redux/hooks/useMainDispatch.native';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import Button from '../../general/Buttons/Button.native';
import CustomSearchBarWithBarcode from '../../general/CustomSearchBar/CustomSearchBarWithBarcode.native';
import Spacing from '../../general/Spacing.native';
import { AddRecipeContentContainer } from './AddRecipeContentStyledComponents.native';

const AddRecipeContent = () => {
  const theme = useGetTheme();
  const { setShowAddRecipeModal } = useMainDispatch();
  
  return (
    <AddRecipeContentContainer backgroundColor={theme.black}>
      <Spacing height={32} />
      <CustomSearchBarWithBarcode />
      <Spacing height={32} />
      <Button type='Exit' onPress={(): void => setShowAddRecipeModal(false)} />
    </AddRecipeContentContainer>
  );
};

export default AddRecipeContent;