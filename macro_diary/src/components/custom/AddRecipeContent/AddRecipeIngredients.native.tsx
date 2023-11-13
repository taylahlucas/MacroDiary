import ScrollableList from '@components/general/List/ScrollableList.native';
import StyledText from '@components/general/Text/StyledText.native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import {
  style,
  AddRecipeIngredientsContainer,  
  AddRecipeIngredientsInnerContainer, 
  AddRecipeIngredientItem,
  AddRecipeIngredientTitle,
  AddRecipeIngredientItemContainer
} from './AddRecipeStyledComponents.native';
import { productDataMock } from '@mock/mockData.native';
import Icon from '@components/general/Icon/Icon.native';

const AddRecipeIngredients = () => {
  const theme = useGetTheme();
  
  return (
    <AddRecipeIngredientsContainer>
      <AddRecipeIngredientTitle type={'ListItemSubTitle'} align={'left'}>ingredients</AddRecipeIngredientTitle>
      <AddRecipeIngredientsInnerContainer backgroundColor={theme.darkGrey}>
        <ScrollableList contentContainerStyle={style.ingredientsList}>
          {productDataMock.map((ingredient, index) => (
            <AddRecipeIngredientItemContainer key={index}>
              <AddRecipeIngredientItem
                color={theme.lightGrey} 
                type={'ListItemSubTitle'} 
                align={'left'}
              >
                {ingredient.title.toLocaleLowerCase()}
              </AddRecipeIngredientItem>
              <StyledText type={'ListItemSubTitle'} color={theme.lightestGrey}>350g</StyledText>
              <Icon name={'cancel'} size={20} color={theme.midGrey} />
            </AddRecipeIngredientItemContainer>
          ))}
        </ScrollableList>
      </AddRecipeIngredientsInnerContainer>
    </AddRecipeIngredientsContainer>
  );
};

export default AddRecipeIngredients;