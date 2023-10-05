import { combineReducers } from '@reduxjs/toolkit';
import mainReducer from './MainState.native';

export const reducers = {
  main: mainReducer
}

const rootReducer = combineReducers({ ...reducers })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;