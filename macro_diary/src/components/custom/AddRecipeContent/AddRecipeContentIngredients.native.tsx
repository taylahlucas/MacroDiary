import { View } from 'react-native';
import ScrollableList from '@components/general/List/ScrollableList.native';
import StyledText from '@components/general/Text/StyledText.native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import { AddRecipeContentIngredientsContainer, AddRecipeContentIngredientTitle } from './AddRecipeContentStyledComponents.native';

const AddRecipeContentIngredients = () => {
  const theme = useGetTheme();

  const mockIngredients = ['carrot', 'broccoli', 'chicken breast', 'carrot', 'broccoli', 'chicken breast']
  
  return (
    <View style={{ flexDirection: 'column'  }}>
      <StyledText style={{ paddingBottom: 8 }} type={'ListItemSubTitle'} align={'left'}>ingredients</StyledText>
      <AddRecipeContentIngredientsContainer color={theme.darkGrey}>
        <ScrollableList contentContainerStyle={{ width: '100%', marginTop: -8, paddingBottom: 32 }}>
          {mockIngredients.map((ingredient, index) => (
            <AddRecipeContentIngredientTitle 
              key={index} 
              color={theme.lightGrey} 
              type={'ListItemSubTitle'} 
              align={'left'}
            >
                {ingredient}
              </AddRecipeContentIngredientTitle>
          ))}
        </ScrollableList>
      </AddRecipeContentIngredientsContainer>
    </View>
  );
};

export default AddRecipeContentIngredients;