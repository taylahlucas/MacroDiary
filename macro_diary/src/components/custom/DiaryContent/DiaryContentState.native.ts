import { createSlice } from "@reduxjs/toolkit";

export interface DiaryContentState {
  readonly selectedDiaryWeek: number;
  readonly selectedDiaryDates: string[];
  readonly canGoRight: boolean;
}

export const initialState: DiaryContentState = {
  selectedDiaryWeek: 0,
  selectedDiaryDates: [],
  canGoRight: false
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
    }
  }
});

export const {
  setSelectedDiaryWeek,
  setSelectedDiaryDates,
  setCanGoRight
} = slice.actions;
export default slice.reducer;