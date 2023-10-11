import { useEffect } from 'react';
import useGetWeekDatesForPeriod from '../../../general/WeekSelection/hooks/useGetWeekDatesForPeriod.native';
import useDiaryContentDispatch from './useDiaryContentDispatch.native';
import useDiaryContentState from './useDiaryContentState.native';

const useSetDiaryWeekDates = () => {
  const { setSelectedDiaryDates } = useDiaryContentDispatch();
  const { selectedDiaryWeek } = useDiaryContentState();
  const getWeekDatesForPeriod = useGetWeekDatesForPeriod();
    
  const weekDates = getWeekDatesForPeriod(selectedDiaryWeek);

  useEffect(() => {
    setSelectedDiaryDates(weekDates)
  }, [selectedDiaryWeek])
};

export default useSetDiaryWeekDates