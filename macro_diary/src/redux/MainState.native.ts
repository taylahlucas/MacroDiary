import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MainState {
  readonly showCamera: boolean;
}

export const initialState: MainState = {
  showCamera: false
}

const SET_SHOW_CAMERA = 'MainState/SET_SHOW_CAMERA';

interface SetShowCameraAction {
  type: typeof SET_SHOW_CAMERA;
  payload: boolean;
}

export const setShowCameraReducer: CaseReducer<MainState, PayloadAction<boolean>> = (state, action) => { 
  action.type
  return { ...state, showCamera: action.payload }
}

const slice = createSlice({
  name: 'main',
  initialState: initialState,
  reducers: {
    setShowCamera: (state, action) => {
      state.showCamera = action.payload
    }
  }
})

export const { setShowCamera } = slice.actions 
export default slice.reducer;