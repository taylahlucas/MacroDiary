import { Dispatch } from 'redux';
import { setShowCamera } from '../MainState.native';
import { useAppDispatch } from '../store.native';

interface MainDispatch {
  setShowCamera: (value: boolean) => void;
}

const useMainDispatch = (): MainDispatch => {
  const dispatch: Dispatch = useAppDispatch();

  return {
    setShowCamera(value: boolean): void {
      dispatch(setShowCamera(value));
    }
  }
}

export default useMainDispatch;
