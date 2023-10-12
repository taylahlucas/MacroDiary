import { useEffect } from 'react';
import useGetWeekDatesForPeriod from '../../../general/WeekSelection/hooks/useGetWeekDatesForPeriod.native';
import useGetWeekPeriod from '../../../general/WeekSelection/hooks/useGetWeekPeriod.native';
import useDiaryContentDispatch from './useDiaryContentDispatch.native';
import useDiaryContentState from './useDiaryContentState.native';

const useSetDiaryWeekDates = () => {
  const { setSelectedDiaryDates, setCanGoRight } = useDiaryContentDispatch();
  const { selectedDiaryWeekPeriod, selectedDiaryDates } = useDiaryContentState();
  const getWeekDatesForPeriod = useGetWeekDatesForPeriod();
  const getWeekPeriod  = useGetWeekPeriod();
  
  const weekDates = getWeekDatesForPeriod(selectedDiaryWeekPeriod);

  const today = new Date();
  const weekNumber = getWeekPeriod(today);

  useEffect(() => {
    setSelectedDiaryDates(weekDates)
    setCanGoRight(selectedDiaryWeekPeriod < weekNumber);
  }, [selectedDiaryWeekPeriod])
};

export default useSetDiaryWeekDates