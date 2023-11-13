import moment from 'moment';
import { RecipeCategoryEnum } from '@utils/CustomEnums.native';
import { Product, RecipeData } from '@utils/CustomTypes.native';

export const productDataMock: Product[] = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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

export const recipeDataMock: RecipeData[] = [
  {
    id: 1,
    title: 'Cottage Pie',
    category: RecipeCategoryEnum.LUNCH,
    ingredients: productDataMock,
    dateAdded: moment().format()
  },
  {
    id: 2,
    title: 'Spaghetti Bolognese',
    category: RecipeCategoryEnum.DINNER,
    ingredients: productDataMock,
    dateAdded: moment().subtract(1, 'day').format()
  },
  {
    id: 3,
    title: 'Eggs on Toast',
    category: RecipeCategoryEnum.BREAKFAST,
    ingredients: productDataMock,
    dateAdded:  moment().subtract(2, 'day').format()
  },
  {
    id: 4,
    title: 'Chicken wrap',
    category: RecipeCategoryEnum.LUNCH,
    ingredients: productDataMock,
    dateAdded: moment().subtract(2, 'day').format()
  },
  {
    id: 5,
    title: 'Oats',
    category: RecipeCategoryEnum.BREAKFAST,
    ingredients: productDataMock,
    dateAdded: moment().subtract(3, 'day').format()
  },
  {
    id: 6,
    title: 'Burrito',
    category: RecipeCategoryEnum.LUNCH,
    ingredients: productDataMock,
    dateAdded: moment().subtract(3, 'day').format()
  },
  {
    id: 8,
    title: 'Salad',
    category: RecipeCategoryEnum.DINNER,
    ingredients: productDataMock,
    dateAdded: moment().subtract(4, 'day').format()
  }
];