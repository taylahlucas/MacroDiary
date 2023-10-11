import React from 'react';
import RecipeItemList from '../components/custom/RecipeItem/RecipeItemList.native';
import RecipeItemListItem from '../components/custom/RecipeItem/RecipeItemListItem.native';
import DaysOfWeek from '../components/general/DaysOfWeek/DaysOfWeek.native';
import StandardLayout from '../components/general/Layouts/StandardLayout.native';
import ScrollableList from '../components/general/List/ScrollableList.native';
import Spacing from '../components/general/Spacing.native';
import WeekSelection from '../components/general/WeekSelection/WeekSelection.native';

const Diary = () => {
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