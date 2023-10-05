import { useSelector } from 'react-redux';
import { MainState } from '../MainState.native';
import { ImmutableMap } from '../../utils/CustomTypes.native';
import { StoreState } from '../../utils/CustomInterfaces.native';

// ImmutableMap<StoreState>
const useMainState = (): MainState => {
  return useSelector((state: StoreState) => state.main);
}

export default useMainState;