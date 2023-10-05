import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'
import rootReducer from './reducer.native';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(logger)
})

// export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;

// export const setShowCameraReducer: CaseReducer<MainState, PayloadAction<boolean>> = (state, action) => { 
//   action.type
//   return { ...state, showCamera: action.payload }
// }
