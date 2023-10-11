import React, { useState } from 'react';
import RecipeItemList from '..//RecipeItem/RecipeItemList.native';
import DaysOfWeek from '../../general/DaysOfWeek/DaysOfWeek.native';
import ScrollableList from '../../general/List/ScrollableList.native';
import Spacing from '../../general/Spacing.native';
import WeekSelection from '../../general/WeekSelection/WeekSelection.native';
import useSetDiaryWeekDates from './hooks/useSetDiaryWeekDates.native';
import useInitCurrentWeek from './hooks/useInitCurrentWeek.native';
import useDiaryContentDispatch from './hooks/useDiaryContentDispatch.native';
import useDiaryContentState from './hooks/useDiaryContentState.native';

const DiaryContent = () => {
  const { setSelectedDiaryWeek } = useDiaryContentDispatch();
  const { selectedDiaryWeek, selectedDiaryDates, canGoRight } = useDiaryContentState();
  
  useInitCurrentWeek();
  useSetDiaryWeekDates();

  // TODO: Color purple for day of week + disabled color
  // TODO: Recipe dropdown
  return (
    <>
      <WeekSelection
        text={`${selectedDiaryDates[0]} - ${selectedDiaryDates[1]}`}
        canGoRight={canGoRight}
        onLeftPress={() => setSelectedDiaryWeek(selectedDiaryWeek - 1)}
        onRightPress={() => setSelectedDiaryWeek(selectedDiaryWeek + 1)}
      />
      <DaysOfWeek />
      <Spacing height={16} />
      <ScrollableList>
        <RecipeItemList />
      </ScrollableList>
    </>
  );
};

export default DiaryContent;