import { createSlice } from "@reduxjs/toolkit";
import { productDataMock } from "@mock/mockData.native";
import { Product } from "@utils/CustomTypes.native";

export interface MainState {
  readonly hasBarcodeScannerPermission: boolean;
  readonly showCamera: boolean;
  readonly showAddRecipeModal: boolean;
  readonly searchValue: string;
  readonly barcodes: string[];
  readonly productData: Product[];
  readonly filteredProductData: Product[];
  readonly selectedSearchTableIndex: number;
}

export const initialState: MainState = {
  hasBarcodeScannerPermission: false,
  showAddRecipeModal: false,
  showCamera: false,
  searchValue: '',
  barcodes: [],
  productData: [],
  filteredProductData: productDataMock,
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
    setShowAddRecipeModal: (state, action) => {
      state.showAddRecipeModal = action.payload;
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
});

export const {
  setHasBarcodeScannerPermission,
  setShowAddRecipeModal,
  setShowCamera, 
  setSearchValue,
  setBarcodes,
  setProductData,
  setFilteredProductData,
  setSelectedSearchTableIndex 
} = slice.actions;
export default slice.reducer;