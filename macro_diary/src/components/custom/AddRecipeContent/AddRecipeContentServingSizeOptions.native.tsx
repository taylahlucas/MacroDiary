import React from 'react';
import { View } from 'react-native';
import { AddRecipeContentServingSizeContainer } from './AddRecipeContentStyledComponents.native';

const AddRecipeContentServingSizeOptions = () => {
  return (
    <AddRecipeContentServingSizeContainer>
      <View style={{ width: 30, height: 30, backgroundColor: 'red', marginTop: 8 }} />
      <View style={{ width: 30, height: 30, backgroundColor: 'red', marginTop: 8 }} />
      <View style={{ width: 30, height: 30, backgroundColor: 'red', marginTop: 8 }} />
    </AddRecipeContentServingSizeContainer>
  );
};

export default AddRecipeContentServingSizeOptions;