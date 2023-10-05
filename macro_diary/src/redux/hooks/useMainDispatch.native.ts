import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { ProductDataType } from '../../utils/CustomTypes.native';
import { 
  setShowCamera,
  setSearchValue,
  setBarcodes,
  setProductData,
  setSelectedSearchTableIndex 
} from '../MainState.native';
import { useAppDispatch } from '../store.native';

interface MainDispatch {
  setShowCamera: (value: boolean) => void;
  setSearchValue: (value: string) => void;
  setBarcodes: (value: string[]) => void;
  setProductData: (value: ProductDataType[]) => void;
  setSelectedSearchTableIndex: (value: number) => void;
}

const useMainDispatch = (): MainDispatch => {
  const dispatch: Dispatch = useAppDispatch();

  return {
    setShowCamera(value: boolean): void {
      dispatch(setShowCamera(value));
    },
    setSearchValue(value: string): void {
      dispatch(setSearchValue(value));
    },
    setBarcodes(value: string[]): void {
      dispatch(setBarcodes(value));
    },
    setProductData(value: ProductDataType[]): void {
      dispatch(setProductData(value));
    },
    setSelectedSearchTableIndex(value: number): void {
      dispatch(setSelectedSearchTableIndex(value));
    }
  }
}

export default useMainDispatch;
