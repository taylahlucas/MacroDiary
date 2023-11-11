import ScrollableList from '@components/general/List/ScrollableList.native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import {
  style,
  AddRecipeIngredientsContainer,  AddRecipeIngredientsInnerContainer, AddRecipeIngredientItem,
  AddRecipeIngredientTitle
} from './AddRecipeStyledComponents.native';

const AddRecipeIngredients = () => {
  const theme = useGetTheme();

  const mockIngredients = ['carrot', 'broccoli', 'chicken breast', 'carrot', 'broccoli', 'chicken breast']
  
  return (
    <AddRecipeIngredientsContainer>
      <AddRecipeIngredientTitle type={'ListItemSubTitle'} align={'left'}>ingredients</AddRecipeIngredientTitle>
      <AddRecipeIngredientsInnerContainer backgroundColor={theme.darkGrey}>
        <ScrollableList contentContainerStyle={style.ingredientsList}>
          {mockIngredients.map((ingredient, index) => (
            <AddRecipeIngredientItem 
              key={index} 
              color={theme.lightGrey} 
              type={'ListItemSubTitle'} 
              align={'left'}
            >
                {ingredient}
              </AddRecipeIngredientItem>
          ))}
        </ScrollableList>
      </AddRecipeIngredientsInnerContainer>
    </AddRecipeIngredientsContainer>
  );
};

export default AddRecipeIngredients;