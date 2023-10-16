import { createSlice } from "@reduxjs/toolkit";
import { DaysOfWeekEnum } from "@utils/CustomEnums.native";

export interface SelectedDayType {
  day: DaysOfWeekEnum;
  date: string;
}

export interface DiaryContentState {
  readonly selectedDiaryWeekPeriod: number;
  readonly selectedDiaryDates: string[];
  readonly canGoRight: boolean;
  readonly selectedDay: SelectedDayType;
}

export const initialState: DiaryContentState = {
  selectedDiaryWeekPeriod: 0,
  selectedDiaryDates: [],
  canGoRight: false,
  selectedDay: {
    day: DaysOfWeekEnum.MONDAY,
    date: ''
  }
};

const slice = createSlice({
  name: 'diary',
  initialState: initialState,
  reducers: {
    setSelectedDiaryWeek: (state, action) => {
      state.selectedDiaryWeekPeriod = action.payload;
    },
    setSelectedDiaryDates: (state, action) => {
      state.selectedDiaryDates = action.payload;
    },
    setCanGoRight: (state, action) => {
      state.canGoRight = action.payload;
    },
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    }
  }
});

export const {
  setSelectedDiaryWeek,
  setSelectedDiaryDates,
  setCanGoRight,
  setSelectedDay
} = slice.actions;
export default slice.reducer;