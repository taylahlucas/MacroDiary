import React from 'react';
import { View } from 'react-native';
import useMainDispatch from '@redux/hooks/useMainDispatch.native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import Button from '@components/general/Buttons/Button.native';
import CustomSearchBarWithBarcode from '@components/general/CustomSearchBar/CustomSearchBarWithBarcode.native';
import Spacing from '@components/general/Spacing.native';
import { AddRecipeContainer, AddRecipeContentContainer } from './AddRecipeContentStyledComponents.native';
import TextField from '@components/general/TextField/TextField.native';
import StyledText from '@components/general/Text/StyledText.native';

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
          <View style={{ flexDirection: 'row' }}>
            <StyledText type={'ListItemSubTitleBold'}>serving size</StyledText>
            <View style={{ width: 10, height: 20, backgroundColor: theme.midGrey}} />
          </View>
          <Button type='Exit' onPress={(): void => setShowAddRecipeModal(false)} />
        </View>
      </AddRecipeContentContainer>
    </AddRecipeContainer>
  );
};

export default AddRecipeContent;