import { months } from "../../../../utils/Constants.native";

const useGetWeekDatesForPeriod = () => {
  const getWeekDatesForPeriod = (weekNumber: number): string[] => {
    const year = new Date().getFullYear();

    const getFormattedDate = (date: Date): string => {
      const day = String(date.getDate());

      return `${day} ${months[date.getMonth()]}`;
    };
  
    const januaryFirst = new Date(year, 0, 1);
    const firstDayOfYear = januaryFirst.getDay();
    const daysOffset = firstDayOfYear > 4 ? 7 - firstDayOfYear : 1 - firstDayOfYear;
  
    const firstSaturday = new Date(year, 0, 1 + daysOffset);
    const daysToAdd = (weekNumber - 1) * 7;
    firstSaturday.setDate(firstSaturday.getDate() + daysToAdd);
  
    const weekDates: string[] = [];
    
    const date = new Date(firstSaturday);
    date.setDate(firstSaturday.getDate());
    weekDates.push(getFormattedDate(date));
    date.setDate(firstSaturday.getDate() + 6);
    weekDates.push(getFormattedDate(date));
  
    return weekDates;
  };


  return getWeekDatesForPeriod;
};

export default useGetWeekDatesForPeriod;