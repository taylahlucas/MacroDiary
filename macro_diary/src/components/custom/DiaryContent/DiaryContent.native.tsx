import React, { useState } from 'react';
import RecipeItemList from '..//RecipeItem/RecipeItemList.native';
import DaysOfWeek from '../../general/DaysOfWeek/DaysOfWeek.native';
import ScrollableList from '../../general/List/ScrollableList.native';
import Spacing from '../../general/Spacing.native';
import WeekSelection from '../../general/WeekSelection/WeekSelection.native';

const DiaryContent = () => {
  const [selectedWeek, setSelectedWeek] = useState();
    // TODO: Arrow button active if its possible to go backwards
  // TODO: Color purple for day of week + disabled color
  // TODO: Recipe dropdown
  return (
    <>
      <WeekSelection />
      <DaysOfWeek />
      <Spacing height={16} />
      <ScrollableList>
        <RecipeItemList />
      </ScrollableList>
    </>
  );
};

export default DiaryContent;