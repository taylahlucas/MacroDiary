import { Dispatch } from 'redux';
import { useAppDispatch } from '../../../../redux/store.native';
import { setSelectedDiaryWeek, setSelectedDiaryDates } from '../DiaryContentState.native';

interface DiaryContentDispatch {
  setSelectedDiaryWeek: (value: number) => void;
  setSelectedDiaryDates: (value: string[]) => void;
}

const useDiaryContentDispatch = (): DiaryContentDispatch => {
  const dispatch: Dispatch = useAppDispatch();

  return {
    setSelectedDiaryWeek(value: number): void {
      dispatch(setSelectedDiaryWeek(value));
    },
    setSelectedDiaryDates(value: string[]): void {
      dispatch(setSelectedDiaryDates(value));
    }
  }
};

export default useDiaryContentDispatch;