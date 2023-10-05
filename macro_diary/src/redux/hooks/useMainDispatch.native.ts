import { Dispatch } from 'redux';
import { useDispatch } from "react-redux";
import { setShowCamera, MainActions } from '../MainState.native';
import { useAppDispatch } from '../store.native';

interface MainDispatch {
  setShowCamera: (value: boolean) => void;
}

const useMainDispatch = (): MainDispatch => {
  const dispatch: Dispatch<MainActions> = useAppDispatch();

  return {
    setShowCamera(value: boolean): void {
      dispatch(setShowCamera(value));
    }
  }
}

export default useMainDispatch;
