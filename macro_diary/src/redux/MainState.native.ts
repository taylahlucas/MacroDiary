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

export type MainActions = SetShowCameraAction;

export function setShowCamera(value: boolean): SetShowCameraAction {
  return { type: SET_SHOW_CAMERA, payload: value }
}

export const setShowCameraReducer: CaseReducer<MainState, PayloadAction<boolean>> = (state, action) => { 
  action.type
  return { ...state, showCamera: action.payload }
}

function MainStateReducer(state = initialState, action: MainActions): MainState {
  switch (action.type) {
    case SET_SHOW_CAMERA:
      console.log("SHOW CAMERA: ", action.payload)
      return {
        ...state,
        showCamera: action.payload
      }
  }
}

const slice = createSlice({
  name: 'main',
  initialState: initialState,
  reducers:  {
    setShowCameraReducer,
    setShowCamera: (state, action) => {
      state.showCamera = action.payload
    }
  }
})

export default slice.reducer;