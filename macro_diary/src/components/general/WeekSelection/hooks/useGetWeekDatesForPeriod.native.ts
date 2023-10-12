import moment from 'moment';

const useGetWeekDatesForPeriod = () => {
  const getWeekDatesForPeriod = (weekNumber: number): string[] => {
    const year = moment().year();
    const firstDayOfYear = moment(`${year}-01-01`, 'YYYY-MM-DD');
  
    // Calculate the start date of the first week
    const firstWeekStart = firstDayOfYear.day() > 0 ? firstDayOfYear.day(8) : firstDayOfYear;
  
    // Calculate the start date of the desired week
    const startOfWeek = firstWeekStart.clone().add((weekNumber - 1) * 7, 'days');
    
    const endOfWeek = startOfWeek.clone().add(6, 'days');

    const weekDates: string[] = [
      startOfWeek.format(),
      endOfWeek.format()
    ];
  
    return weekDates;
  };

  return getWeekDatesForPeriod;
};

export default useGetWeekDatesForPeriod;