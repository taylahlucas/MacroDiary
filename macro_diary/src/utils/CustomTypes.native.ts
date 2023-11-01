import { ScreenEnum, IconTypeEnum, TabEnum, SearchMenuListEnum, RecipeCategoryEnum } from "./CustomEnums.native";

export interface TabItemType {
  id: TabEnum;
  icon: MaterialIconsType | IoniconType;
  iconType: IconTypeEnum;
  title: string;
  screen: () => React.JSX.Element;
}

export interface ScannedMenuListType {
  id: SearchMenuListEnum;
  title: string;
}

export interface RecipeDataType {
  id: number;
  title: string;
  category: RecipeCategoryEnum;
  ingredients: ProductDataType[];
  dateAdded: string;
}

export type MaterialIconsType =
  | 'add-circle'
  | 'diary'
  | 'format-list-bulleted'
  | 'search';


export type IoniconType =
  | 'arrow-back'
  | 'arrow-forward'
  | 'pie-chart'
  | 'settings-outline'
  | 'chevron-down-outline';

export type IconType = MaterialIconsType | IoniconType;

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

export interface ImmutableMap<T> {
  get<K extends keyof T>(name: K): T[K];
  set<S>(o: S): ImmutableMap<T & S>;
  toJS(): T;
}