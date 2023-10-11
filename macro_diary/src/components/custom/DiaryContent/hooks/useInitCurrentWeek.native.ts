import { useEffect } from "react";
import useDiaryContentDispatch from "./useDiaryContentDispatch.native";
import useGetWeekPeriod from '../../../general/WeekSelection/hooks/useGetWeekPeriod.native';

const useInitCurrentWeek = () => {
  const { setSelectedDiaryWeek } = useDiaryContentDispatch();
  const getWeekPeriod = useGetWeekPeriod();
  
  const today = new Date();
  const weekNumber = getWeekPeriod(today);

  useEffect(() => {
    setSelectedDiaryWeek(weekNumber);
  }, [])
};

export default useInitCurrentWeek;