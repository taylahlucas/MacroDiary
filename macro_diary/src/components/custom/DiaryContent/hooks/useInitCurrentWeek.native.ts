import { useEffect } from "react";
import useDiaryContentDispatch from "./useDiaryContentDispatch.native";
import useGetWeekNumber from '../../../general/WeekSelection/hooks/useGetWeekNumber.native';

const useInitCurrentWeek = () => {
  const { setSelectedDiaryWeek } = useDiaryContentDispatch();
  const getWeekNumber = useGetWeekNumber();
  
  const today = new Date();
  const { weekNumber } = getWeekNumber(today);

  useEffect(() => {
    setSelectedDiaryWeek(weekNumber);
  }, [])
};

export default useInitCurrentWeek;