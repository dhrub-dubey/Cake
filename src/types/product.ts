export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  isVeg: boolean;
  quantity: string;
  ingredients: string[];
  allergens: string[];
  additionalImages: string[];
  nutritionalInfo: {
    servingSize: string;
    calories: number;
    protein: number;
    carbohydrates: number;
    fat: number;
  };
  storageInstructions: string;
  shelfLife: string;
}