const useGetWeekPeriod = () => {
  const getWeekPeriod = (date: Date): number => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const millisecsInDay = 86400000;
    const weekNumber = Math.ceil(
      (((date.getTime() - firstDayOfYear.getTime()) / millisecsInDay) + firstDayOfYear.getDay() + 1) / 7
    );
  
    return weekNumber;
  };

  return getWeekPeriod;
};

export default useGetWeekPeriod;