import { useSelector } from 'react-redux';
import { StoreState } from  '@utils/CustomInterfaces.native';
import { DiaryContentState } from '../DiaryContentState.native';

const useDiaryContentState = (): DiaryContentState => {
  return useSelector((state: StoreState) => state.diary);
}

export default useDiaryContentState;