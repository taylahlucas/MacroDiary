import StyledText from '@components/general/Text/StyledText.native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import React from 'react';
import { View } from 'react-native';
import { AddRecipeContentServingSizeContainer } from './AddRecipeContentStyledComponents.native';

const AddRecipeContentServingSizeOptions = () => {
  const theme = useGetTheme();
  const servingSizes = [1, 2, 3, 4];

  return (
    <AddRecipeContentServingSizeContainer contentContainerStyle={{ width: 30, paddingBottom: 32 }} color={theme.darkGrey}>
      {servingSizes.map((size, index) => (
        <View key={index} style={{ width: 60, height: 30, marginTop: 10 }}>
          <StyledText type={'ListItemSubTitle'} color={theme.lightGrey}>{size.toString()}</StyledText>
        </View>
      ))}
    </AddRecipeContentServingSizeContainer>
  );
};

export default AddRecipeContentServingSizeOptions;