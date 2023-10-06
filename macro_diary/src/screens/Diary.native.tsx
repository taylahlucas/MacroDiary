import React from 'react';
import { View } from 'react-native';
import RecipeItemList from '../components/custom/RecipeItem/RecipeItemList.native';
import RecipeItemListItem from '../components/custom/RecipeItem/RecipeItemListItem.native';
import DaysOfWeek from '../components/general/DaysOfWeek/DaysOfWeek.native';
import StandardLayout from '../components/general/Layouts/StandardLayout.native';
import ScrollableList from '../components/general/List/ScrollableList.native';
import Spacing from '../components/general/Spacing.native';
import StyledText from '../components/general/Text/StyledText.native';
import WeekSelection from '../components/general/WeekSelection/WeekSelection.native';
import { recipeDataMock } from '../mock/mockData.native';
import useGetTheme from '../styles/hooks/useGetTheme.native';
import { RecipeCategoryEnum } from '../utils/CustomEnums.native';

const Diary = () => {
  const sections: RecipeCategoryEnum[] = [
    RecipeCategoryEnum.BREAKFAST,
    RecipeCategoryEnum.LUNCH,
    RecipeCategoryEnum.DINNER,
    RecipeCategoryEnum.SNACK
  ];
  // TODO: Arrow button active if its possible to go backwards
  // TODO: Color purple for day of week + disabled color
  // TODO: Recipe dropdown
  return (
    <StandardLayout>
      <WeekSelection />
      <DaysOfWeek />
      <Spacing height={16} />
      <ScrollableList>
        <RecipeItemList />
      </ScrollableList>
    </StandardLayout>
  )
};

export default Diary;