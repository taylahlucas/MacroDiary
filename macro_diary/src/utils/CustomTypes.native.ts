import { ScreenEnum, IconTypeEnum, TabEnum, SearchMenuListEnum, RecipeCategoryEnum, MeasurementEnum } from './CustomEnums.native';

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

export interface Product {
  id: number;
  barcode: string;
  title: string;
  macros: Macro;
}

export interface RecipeIngredient {
  id: number;
  ingredient: Product;
  quantity: number;
  quantityType: MeasurementEnum;
}

export interface RecipeData {
  id: number;
  title: string;
  description?: string;
  category: RecipeCategoryEnum;
  ingredients: Product[];
  dateAdded: string;
}

export interface Macro {
  calories: number;
  carbohydrates: number;
  fat: number;
  protein: number;
  salt: number;
  saturatedFat: number;
  sodium: number;
  sugar: number;
}

export interface ChartDataProps {
  title: string;
  value: number;
  color: string;
}

export type MaterialIconsType =
  | 'add-circle'
  | 'cancel'
  | 'diary'
  | 'format-list-bulleted'
  | 'search';


export type IoniconType =
  | 'arrow-back'
  | 'arrow-forward'
  | 'checkmark-circle'
  | 'pie-chart'
  | 'settings-outline'
  | 'chevron-down-outline';

export type IconType = MaterialIconsType | IoniconType;

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