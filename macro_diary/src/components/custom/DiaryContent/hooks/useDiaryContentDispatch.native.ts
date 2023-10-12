import moment from 'moment';
import { Dispatch } from 'redux';
import { useAppDispatch } from '../../../../redux/store.native';
import { DaysOfWeekEnum } from '../../../../utils/CustomEnums.native';
import { setSelectedDiaryWeek, setSelectedDiaryDates, setCanGoRight, setSelectedDay } from '../DiaryContentState.native';

interface DiaryContentDispatch {
  setSelectedDiaryWeek: (value: number) => void;
  setSelectedDiaryDates: (value: string[]) => void;
  setCanGoRight: (value: boolean) => void;
  setSelectedDay: (value: DaysOfWeekEnum) => void;
}

const useDiaryContentDispatch = (): DiaryContentDispatch => {
  const dispatch: Dispatch = useAppDispatch();

  return {
    setSelectedDiaryWeek(value: number): void {
      dispatch(setSelectedDiaryWeek(value));
    },
    setSelectedDiaryDates(value: string[]): void {
      dispatch(setSelectedDiaryDates(value));
    },
    setCanGoRight(value: boolean): void {
      dispatch(setCanGoRight(value));
    },
    setSelectedDay(value: DaysOfWeekEnum): void {
      dispatch(setSelectedDay(value));
    }
  }
};

export default useDiaryContentDispatch;