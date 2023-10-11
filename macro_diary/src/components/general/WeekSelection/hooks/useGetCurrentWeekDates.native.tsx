import React from 'react';

const useGetCurrentWeekDates = () => {
  const getCurrentWeekDates = (): Date[] => {
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  
    // Calculate the difference in days between today and Monday
    const daysUntilMonday = (currentDay + 6) % 7;
  
    // Calculate the date of Monday of the current week
    const monday = new Date(today);
    monday.setDate(today.getDate() - daysUntilMonday);
    monday.setHours(0, 0, 0, 0);
  
    // Create an array to store the dates of the week
    const weekDates: Date[] = [];
  
    // Loop to get the dates of the week
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      weekDates.push(date);
    }
  
    return weekDates;
  };
  
  // Example usage
  const weekDates = getCurrentWeekDates();
  weekDates.forEach(date => console.log(date.toDateString()));
};

export default useGetCurrentWeekDates;