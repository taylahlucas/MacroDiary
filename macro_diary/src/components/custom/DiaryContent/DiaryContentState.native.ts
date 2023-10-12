import { createSlice } from "@reduxjs/toolkit";
import { DaysOfWeekEnum } from "../../../utils/CustomEnums.native";

export interface DiaryContentState {
  readonly selectedDiaryWeek: number;
  readonly selectedDiaryDates: string[];
  readonly canGoRight: boolean;
  readonly selectedDay: DaysOfWeekEnum;
}

export const initialState: DiaryContentState = {
  selectedDiaryWeek: 0,
  selectedDiaryDates: [],
  canGoRight: false,
  selectedDay: DaysOfWeekEnum.MONDAY
};

const slice = createSlice({
  name: 'diary',
  initialState: initialState,
  reducers: {
    setSelectedDiaryWeek: (state, action) => {
      state.selectedDiaryWeek = action.payload;
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