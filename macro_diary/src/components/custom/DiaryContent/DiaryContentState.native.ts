import { createSlice } from "@reduxjs/toolkit";

export interface DiaryContentState {
  readonly selectedDiaryWeek: number;
  readonly selectedDiaryDates: string[];
}

export const initialState: DiaryContentState = {
  selectedDiaryWeek: 0,
  selectedDiaryDates: []
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
    }
  }
});

export const {
  setSelectedDiaryWeek,
  setSelectedDiaryDates
} = slice.actions;
export default slice.reducer;