import { createSlice } from "@reduxjs/toolkit";
import { ProductDataType } from "../utils/CustomTypes.native";

export interface MainState {
  readonly showCamera: boolean;
  readonly searchValue: string;
  readonly barcodes: string[];
  readonly productData: ProductDataType[];
  readonly selectedSearchTableIndex: number;
}

export const initialState: MainState = {
  showCamera: false,
  searchValue: '',
  barcodes: [],
  productData: [],
  selectedSearchTableIndex: 0
}

const slice = createSlice({
  name: 'main',
  initialState: initialState,
  reducers: {
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
      state.barcodes = action.payload;
    },
    setSelectedSearchTableIndex: (state, action) => {
      state.barcodes = action.payload;
    }
  }
})

export const {
  setShowCamera, 
  setSearchValue,
  setBarcodes,
  setProductData,
  setSelectedSearchTableIndex 
} = slice.actions;
export default slice.reducer;