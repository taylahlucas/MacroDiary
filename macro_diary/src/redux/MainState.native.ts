import { createSlice } from "@reduxjs/toolkit";
import { ProductDataType } from "../utils/CustomTypes.native";

export interface MainState {
  readonly hasBarcodeScannerPermission: boolean;
  readonly showCamera: boolean;
  readonly searchValue: string;
  readonly barcodes: string[];
  readonly productData: ProductDataType[];
  readonly filteredProductData: ProductDataType[];
  readonly selectedSearchTableIndex: number;
}

export const initialState: MainState = {
  hasBarcodeScannerPermission: false,
  showCamera: false,
  searchValue: '',
  barcodes: [],
  productData: [],
  filteredProductData: [],
  selectedSearchTableIndex: 0
}

const slice = createSlice({
  name: 'main',
  initialState: initialState,
  reducers: {
    setHasBarcodeScannerPermission: (state, action) => {
      state.hasBarcodeScannerPermission = action.payload;
    },
    setShowCamera: (state, action) => {
      state.showCamera = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setBarcodes: (state, action) => {
      state.barcodes  = action.payload
    },
    setProductData: (state, action) => {
      state.productData = action.payload;
    },
    setFilteredProductData: (state, action) => {
      state.filteredProductData = action.payload;
    },
    setSelectedSearchTableIndex: (state, action) => {
      state.selectedSearchTableIndex = action.payload;
    }
  }
})

export const {
  setHasBarcodeScannerPermission,
  setShowCamera, 
  setSearchValue,
  setBarcodes,
  setProductData,
  setFilteredProductData,
  setSelectedSearchTableIndex 
} = slice.actions;
export default slice.reducer;