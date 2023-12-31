import { Dispatch } from 'redux';
import { Product } from '@utils/CustomTypes.native';
import { 
  setHasBarcodeScannerPermission,
  setShowCamera,
  setShowAddRecipeModal,
  setSearchValue,
  setBarcodes,
  setProductData,
  setFilteredProductData,
  setSelectedSearchTableIndex
} from '../MainState.native';
import { useAppDispatch } from '../store.native';

interface MainDispatch {
  setHasBarcodeScannerPermission: (value: boolean) => void;
  setShowCamera: (value: boolean) => void;
  setShowAddRecipeModal: (value: boolean) => void;
  setSearchValue: (value: string) => void;
  setBarcodes: (value: string[]) => void;
  setProductData: (value: Product[]) => void;
  setFilteredProductData: (value: Product[]) => void;
  setSelectedSearchTableIndex: (value: number) => void;
}

const useMainDispatch = (): MainDispatch => {
  const dispatch: Dispatch = useAppDispatch();

  return {
    setHasBarcodeScannerPermission(value: boolean): void {
      dispatch(setHasBarcodeScannerPermission(value));
    },
    setShowCamera(value: boolean): void {
      dispatch(setShowCamera(value));
    },
    setShowAddRecipeModal(value: boolean): void {
      dispatch(setShowAddRecipeModal(value));
    },
    setSearchValue(value: string): void {
      dispatch(setSearchValue(value));
    },
    setBarcodes(value: string[]): void {
      dispatch(setBarcodes(value));
    },
    setProductData(value: Product[]): void {
      dispatch(setProductData(value));
    },
    setFilteredProductData(value: Product[]): void {
      dispatch(setFilteredProductData(value));
    },
    setSelectedSearchTableIndex(value: number): void {
      dispatch(setSelectedSearchTableIndex(value));
    }
  }
}

export default useMainDispatch;
