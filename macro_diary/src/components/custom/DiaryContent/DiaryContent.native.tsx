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
import useGetFormattedDateForPeriod from '../../general/WeekSelection/hooks/useGetFormattedDateForPeriod.native';

const DiaryContent = () => {
  const { setSelectedDiaryWeek, setSelectedDay } = useDiaryContentDispatch();
  const { selectedDiaryWeek, selectedDiaryDates, canGoRight, selectedDay } = useDiaryContentState();
  const getFormattedDateForPeriod = useGetFormattedDateForPeriod();
  
  useInitCurrentWeek();
  useSetDiaryWeekDates();

  // TODO: Recipe dropdown
  return (
    <>
      <WeekSelection
        text={`${getFormattedDateForPeriod(selectedDiaryDates[0])} - ${getFormattedDateForPeriod(selectedDiaryDates[1])}`}
        canGoRight={canGoRight}
        onLeftPress={() => setSelectedDiaryWeek(selectedDiaryWeek - 1)}
        onRightPress={() => setSelectedDiaryWeek(selectedDiaryWeek + 1)}
      />
      <DaysOfWeek selectedDay={selectedDay} setSelectedDay={setSelectedDay} weekRange={selectedDiaryDates} />
      <Spacing height={16} />
      <ScrollableList>
        <RecipeItemList />
      </ScrollableList>
    </>
  );
};

export default DiaryContent;