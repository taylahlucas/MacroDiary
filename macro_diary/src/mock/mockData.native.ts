import { RecipeCategoryEnum } from "../utils/CustomEnums.native";
import { ProductDataType } from "../utils/CustomTypes.native";

export const productDataMock: ProductDataType[] = [
  {
    barcode: '1234',
    title: 'Broccoli',
    macros: {
      calories: 10,
      carbohydrates: 20,
      fat: 2,
      protein: 20,
      salt: 1,
      saturatedFat: 20,
      sodium: 10,
      sugar: 4
    }
  },
  {
    barcode: '1235',
    title: 'Carrot',
    macros: {
      calories: 10,
      carbohydrates: 20,
      fat: 2,
      protein: 20,
      salt: 1,
      saturatedFat: 20,
      sodium: 10,
      sugar: 4
    }
  },
  {
    barcode: '1236',
    title: 'Cauliflower',
    macros: {
      calories: 10,
      carbohydrates: 20,
      fat: 2,
      protein: 20,
      salt: 1,
      saturatedFat: 20,
      sodium: 10,
      sugar: 4
    }
  },
  {
    barcode: '1237',
    title: 'Chicken Breast',
    macros: {
      calories: 10,
      carbohydrates: 20,
      fat: 2,
      protein: 20,
      salt: 1,
      saturatedFat: 20,
      sodium: 10,
      sugar: 4
    }
  },
  {
    barcode: '1238',
    title: 'Milk',
    macros: {
      calories: 10,
      carbohydrates: 20,
      fat: 2,
      protein: 20,
      salt: 1,
      saturatedFat: 20,
      sodium: 10,
      sugar: 4
    }
  },
  {
    barcode: '1239',
    title: 'Steak',
    macros: {
      calories: 10,
      carbohydrates: 20,
      fat: 2,
      protein: 20,
      salt: 1,
      saturatedFat: 20,
      sodium: 10,
      sugar: 4
    }
  },
  {
    barcode: '1240',
    title: 'Chips',
    macros: {
      calories: 10,
      carbohydrates: 20,
      fat: 2,
      protein: 20,
      salt: 1,
      saturatedFat: 20,
      sodium: 10,
      sugar: 4
    }
  }
];

export const recipeDataMock = [
  {
    id: 1,
    title: 'Cottage Pie',
    category: RecipeCategoryEnum.LUNCH,
    ingredients: productDataMock
  },
  {
    id: 2,
    title: 'Spaghetti Bolognese',
    category: RecipeCategoryEnum.DINNER,
    ingredients: productDataMock
  },
  {
    id: 3,
    title: 'Eggs on Toast',
    category: RecipeCategoryEnum.BREAKFAST,
    ingredients: productDataMock
  },
  {
    id: 4,
    title: 'Chicken wrap',
    category: RecipeCategoryEnum.LUNCH,
    ingredients: productDataMock
  }
];