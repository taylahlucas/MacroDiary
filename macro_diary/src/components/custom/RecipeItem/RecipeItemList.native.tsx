import { View } from 'react-native';
import { RecipeCategoryEnum } from '../../../utils/CustomEnums.native';
import StyledText from '../../general/Text/StyledText.native';
import RecipeItemListItem from './RecipeItemListItem.native';
import Spacing from '../../general/Spacing.native';
import { recipeDataMock } from '../../../mock/mockData.native';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';

const RecipeItemList = () => {
  const theme = useGetTheme();
  const sections: RecipeCategoryEnum[] = [
    RecipeCategoryEnum.BREAKFAST,
    RecipeCategoryEnum.LUNCH,
    RecipeCategoryEnum.DINNER,
    RecipeCategoryEnum.SNACK
  ];

  return (
    <>
      {sections.map((section, index) => {
        const recipes = recipeDataMock.filter(item => item.category === section);
        return (
          <View key={index} style={{ width: 350 }}>
            <StyledText type={'ListItemSubTitleBold'} align={'left'}>{section}</StyledText>
            <Spacing height={16} />
            {recipes.map(recipe =>
              <RecipeItemListItem
                key={recipe.id}
                title={recipe.title}
                color={theme.darkGrey}
                ingredients={recipe.ingredients}
              />
            )}
            <Spacing height={16} />
          </View>
        );
      })}
    </>
  );
};

export default RecipeItemList;