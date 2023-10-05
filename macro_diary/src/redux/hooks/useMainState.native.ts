import { useSelector } from 'react-redux';
import { MainState } from '../MainState.native';
import { StoreState } from '../../utils/CustomInterfaces.native';

const useMainState = (): MainState => {
  return useSelector((state: StoreState) => state.main);
}

export default useMainState;