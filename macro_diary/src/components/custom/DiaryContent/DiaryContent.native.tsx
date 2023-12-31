import React from 'react';
import moment from 'moment';
import RecipeItemList from '../RecipeItem/RecipeItemList.native';
import DaysOfWeek from '@components/general/DaysOfWeek/DaysOfWeek.native';
import ScrollableList from '@components/general/List/ScrollableList.native';
import Spacing from '@components/general/Spacing.native';
import WeekSelection from '@components/general/WeekSelection/WeekSelection.native';
import useSetDiaryWeekDates from './hooks/useSetDiaryWeekDates.native';
import useInitCurrentWeek from './hooks/useInitCurrentWeek.native';
import useDiaryContentDispatch from './hooks/useDiaryContentDispatch.native';
import useDiaryContentState from './hooks/useDiaryContentState.native';
import useGetFormattedDateForPeriod from '@components/general/WeekSelection/hooks/useGetFormattedDateForPeriod.native';

const DiaryContent = () => {
  const { setSelectedDiaryWeek, setSelectedDay } = useDiaryContentDispatch();
  const { selectedDiaryWeekPeriod, selectedDiaryDates, canGoRight, selectedDay } = useDiaryContentState();
  const getFormattedDateForPeriod = useGetFormattedDateForPeriod();
  
  useInitCurrentWeek();
  useSetDiaryWeekDates();

  // TODO: Recipe dropdown
  return (
    <>
      <WeekSelection
        text={`${getFormattedDateForPeriod(selectedDiaryDates[0])} - ${getFormattedDateForPeriod(selectedDiaryDates[1])}`}
        canGoRight={canGoRight}
        onLeftPress={() => {
          setSelectedDiaryWeek(selectedDiaryWeekPeriod - 1);
          setSelectedDay({
            ...selectedDay,
            date: moment(selectedDay.date).subtract(7, 'day').format()
          })
        }}
        onRightPress={() => {
          setSelectedDiaryWeek(selectedDiaryWeekPeriod + 1);
          setSelectedDay({
            ...selectedDay,
            date: moment(selectedDay.date).add(7, 'day').format()
          })
        }}
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