import { View } from 'react-native';
import moment from 'moment';
import { RecipeCategoryEnum } from '@utils/CustomEnums.native';
import StyledText from '@components/general/Text/StyledText.native';
import RecipeItemListItem from './RecipeItemListItem.native';
import Spacing from '@components/general/Spacing.native';
import { recipeDataMock } from '@mock/mockData.native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import useDiaryContentState from '../DiaryContent/hooks/useDiaryContentState.native';

const RecipeItemList = () => {
  const theme = useGetTheme();
  const sections: RecipeCategoryEnum[] = [
    RecipeCategoryEnum.BREAKFAST,
    RecipeCategoryEnum.LUNCH,
    RecipeCategoryEnum.DINNER,
    RecipeCategoryEnum.SNACK
  ];
  const { selectedDay } = useDiaryContentState();

  return (
    <>
      {sections.map((section, index) => {
        const recipes = recipeDataMock.filter(item => item.category === section && moment(item.dateAdded).date() === moment(selectedDay.date).date());

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