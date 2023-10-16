import { combineReducers } from '@reduxjs/toolkit';
import mainReducer from './MainState.native';
import diaryReducer from '@components/custom/DiaryContent/DiaryContentState.native';

export const reducers = {
  main: mainReducer,
  diary: diaryReducer
}

const rootReducer = combineReducers({ ...reducers })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;