import React from 'react';
import { View } from 'react-native';
import useMainDispatch from '@redux/hooks/useMainDispatch.native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import Button from '@components/general/Buttons/Button.native';
import CustomSearchBarWithBarcode from '@components/general/CustomSearchBar/CustomSearchBarWithBarcode.native';
import AddRecipeContentServingSize from './AddRecipeContentServingSize.native';
import Spacing from '@components/general/Spacing.native';
import { AddRecipeContainer, AddRecipeContentContainer } from './AddRecipeContentStyledComponents.native';
import TextField from '@components/general/TextField/TextField.native';

const AddRecipeContent = () => {
  const theme = useGetTheme();
  const { setShowAddRecipeModal } = useMainDispatch();
  
  return (
    <AddRecipeContainer backgroundColor={theme.black}>
      <AddRecipeContentContainer>
        <Spacing height={32} />
        <CustomSearchBarWithBarcode />
        <View style={{ 
          flex: 1,
          flexDirection: 'column', 
          justifyContent: 'space-evenly' 
        }}
        >
          <TextField placeholder={'recipe name'} />

          <AddRecipeContentServingSize />
          
          <Button type='Exit' onPress={(): void => setShowAddRecipeModal(false)} />
        </View>
      </AddRecipeContentContainer>
    </AddRecipeContainer>
  );
};

export default AddRecipeContent;