import StyledText from '@components/general/Text/StyledText.native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import React from 'react';
import { 
  style,
  AddRecipeServingSizeContainer, AddRecipeServingSizeItem 
} from './AddRecipeStyledComponents.native';
import useAddRecipeDispatch from './hooks/useAddRecipeDispatch.native';
import useAddRecipeState from './hooks/useAddRecipeState.native';

const AddRecipeServingSizeOptions = () => {
  const theme = useGetTheme();
  const { setServingSize } = useAddRecipeDispatch();
  const { servingSize } = useAddRecipeState();
  const servingSizes = [1, 2, 3, 4];

  return (
    <AddRecipeServingSizeContainer contentContainerStyle={{ ...style.servingSizeList }} backgroundColor={theme.black}>
      {servingSizes.map((size, index) => (
        <AddRecipeServingSizeItem 
          key={index} 
          onPress={() => {
            setServingSize(size);
          }} 
          disabled={size === servingSize}
        >
          <StyledText 
            type={'ListItemSubTitle'} 
            color={size === servingSize ? theme.midGrey : theme.lightGrey}
          >
              {size.toString()}
          </StyledText>
        </AddRecipeServingSizeItem>
      ))}
    </AddRecipeServingSizeContainer>
  );
};

export default AddRecipeServingSizeOptions;