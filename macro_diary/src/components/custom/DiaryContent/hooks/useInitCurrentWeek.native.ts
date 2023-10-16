import { useEffect } from "react";
import moment from "moment";
import useDiaryContentDispatch from "./useDiaryContentDispatch.native";
import useGetWeekPeriod from '@components/general/WeekSelection/hooks/useGetWeekPeriod.native';
import { daysOfWeek } from "@utils/Constants.native";

const useInitCurrentWeek = () => {
  const { setSelectedDiaryWeek, setSelectedDay } = useDiaryContentDispatch();
  const getWeekPeriod = useGetWeekPeriod();
  
  const today = new Date();
  const weekNumber = getWeekPeriod(today);

  useEffect(() => {
    setSelectedDiaryWeek(weekNumber);
    setSelectedDay({
      day: daysOfWeek[moment().day() - 1],
      date: moment().format()
    })
  }, [])
};

export default useInitCurrentWeek;