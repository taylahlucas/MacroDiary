import { useEffect } from 'react';
import useGetWeekDatesForPeriod from '../../../general/WeekSelection/hooks/useGetWeekDatesForPeriod.native';
import useGetWeekPeriod from '../../../general/WeekSelection/hooks/useGetWeekPeriod.native';
import useDiaryContentDispatch from './useDiaryContentDispatch.native';
import useDiaryContentState from './useDiaryContentState.native';

const useSetDiaryWeekDates = () => {
  const { setSelectedDiaryDates, setCanGoRight } = useDiaryContentDispatch();
  const { selectedDiaryWeek } = useDiaryContentState();
  const getWeekDatesForPeriod = useGetWeekDatesForPeriod();
  const getWeekPeriod  = useGetWeekPeriod();
    
  const weekDates = getWeekDatesForPeriod(selectedDiaryWeek);

  const today = new Date();
  const weekNumber = getWeekPeriod(today);

  useEffect(() => {
    setSelectedDiaryDates(weekDates)
    setCanGoRight(selectedDiaryWeek < weekNumber);
  }, [selectedDiaryWeek])
};

export default useSetDiaryWeekDates