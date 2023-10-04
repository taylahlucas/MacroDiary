import { ScreenEnum } from "./CustomEnums.native";

export interface ProductDataType {
  barcode: string;
  title: string;
  macros: MacroType;
}

export interface MacroType {
  calories: number;
  carbohydrates: number;
  fat: number;
  protein: number;
  salt: number;
  saturatedFat: number;
  sodium: number;
  sugar: number;
}

export interface Product {
  barcode: number;
  item: string;
  macros: MacroType;
}

export interface ChartDataProps {
  title: string;
  value: number;
  color: string;
}

export interface NativeNavigation {
  navigate: (page: ScreenEnum, params?: any) => void;
  getCurrentScreenName: () => ScreenEnum | null;
  goBack: () => void;
  setOptions: (options: any) => void;
}