import { Product } from '../types/product';

export const cakes: Product[] = [
  {
    id: 1,
    name: "Classic Wedding Cake",
    description: "Elegant three-tier vanilla cake with buttercream frosting",
    price: "Rs. 4500.00",
    image: "https://images.unsplash.com/photo-1623428454614-abaf00244e52?auto=format&fit=crop&w=800&q=80",
    category: "Wedding",
    isVeg: true,
    quantity: "3-tier cake (serves 100-120)",
    ingredients: [
      "Premium vanilla beans",
      "Organic flour",
      "Free-range eggs",
      "European butter",
      "Pure cane sugar",
      "Fresh cream",
      "Madagascar vanilla extract"
    ],
    allergens: ["Eggs", "Dairy", "Wheat", "Gluten"],
    additionalImages: [
      "https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519657337289-077653f724ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=80"
    ],
    nutritionalInfo: {
      servingSize: "100g",
      calories: 385,
      protein: 5,
      carbohydrates: 49,
      fat: 18
    },
    storageInstructions: "Store in a cool, dry place. Refrigerate after cutting.",
    shelfLife: "Best consumed within 3 days"
  },
  {
    id: 2,
    name: "Birthday Funfetti Cake",
    description: "Colorful vanilla cake filled with rainbow sprinkles and vanilla buttercream",
    price: "Rs. 1200.00",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=800&q=80",
    category: "Birthday",
    isVeg: true,
    quantity: "2-layer cake (serves 12-15)",
    ingredients: [
      "Vanilla extract",
      "Rainbow sprinkles",
      "Cake flour",
      "Butter",
      "Sugar",
      "Eggs",
      "Milk"
    ],
    allergens: ["Eggs", "Dairy", "Wheat", "Gluten"],
    additionalImages: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1557979619-445218f326b9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?auto=format&fit=crop&w=800&q=80"
    ],
    nutritionalInfo: {
      servingSize: "100g",
      calories: 395,
      protein: 4,
      carbohydrates: 52,
      fat: 20
    },
    storageInstructions: "Store in an airtight container in the refrigerator",
    shelfLife: "Best consumed within 4 days"
  },
  {
    id: 3,
    name: "Chocolate Truffle Cake",
    description: "Rich chocolate cake with dark chocolate ganache and chocolate shavings",
    price: "Rs. 1500.00",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    category: "Classic",
    isVeg: false,
    quantity: "2-layer cake (serves 8-10)",
    ingredients: [
      "Dark chocolate",
      "Cocoa powder",
      "Fresh cream",
      "Butter",
      "Eggs",
      "Sugar",
      "Flour"
    ],
    allergens: ["Eggs", "Dairy", "Wheat", "Gluten", "Soy"],
    additionalImages: [
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1557979619-445218f326b9?auto=format&fit=crop&w=800&q=80"
    ],
    nutritionalInfo: {
      servingSize: "100g",
      calories: 420,
      protein: 6,
      carbohydrates: 45,
      fat: 25
    },
    storageInstructions: "Store in the refrigerator",
    shelfLife: "Best consumed within 5 days"
  },
  {
    id: 4,
    name: "Red Velvet Delight",
    description: "Classic red velvet cake with cream cheese frosting",
    price: "Rs. 1300.00",
    image: "https://images.unsplash.com/photo-1586788680399-2c847f7d8b42?auto=format&fit=crop&w=800&q=80",
    category: "Classic",
    isVeg: false,
    quantity: "2-layer cake (serves 10-12)",
    ingredients: [
      "Cocoa powder",
      "Buttermilk",
      "Cream cheese",
      "Butter",
      "Eggs",
      "Food coloring",
      "Flour"
    ],
    allergens: ["Eggs", "Dairy", "Wheat", "Gluten"],
    additionalImages: [
      "https://images.unsplash.com/photo-1586788680399-2c847f7d8b42?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586788680399-2c847f7d8b42?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586788680399-2c847f7d8b42?auto=format&fit=crop&w=800&q=80"
    ],
    nutritionalInfo: {
      servingSize: "100g",
      calories: 405,
      protein: 5,
      carbohydrates: 48,
      fat: 22
    },
    storageInstructions: "Store in the refrigerator",
    shelfLife: "Best consumed within 4 days"
  },
  {
    id: 5,
    name: "Dinosaur Adventure Cake",
    description: "Fun dinosaur-themed cake with edible decorations and chocolate rocks",
    price: "Rs. 1800.00",
    image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=800&q=80",
    category: "Kids",
    isVeg: true,
    quantity: "2-layer cake (serves 15-20)",
    ingredients: [
      "Vanilla cake mix",
      "Fondant decorations",
      "Chocolate rocks",
      "Food coloring",
      "Butter cream",
      "Eggs",
      "Milk"
    ],
    allergens: ["Eggs", "Dairy", "Wheat", "Gluten"],
    additionalImages: [
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
    ],
    nutritionalInfo: {
      servingSize: "100g",
      calories: 380,
      protein: 4,
      carbohydrates: 54,
      fat: 18
    },
    storageInstructions: "Store in the refrigerator",
    shelfLife: "Best consumed within 4 days"
  },
  {
    id: 6,
    name: "Superhero Theme Cake",
    description: "Action-packed superhero-themed cake with comic book design",
    price: "Rs. 2000.00",
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=800&q=80",
    category: "Kids",
    isVeg: true,
    quantity: "3-layer cake (serves 20-25)",
    ingredients: [
      "Chocolate cake mix",
      "Fondant decorations",
      "Edible prints",
      "Buttercream",
      "Food coloring",
      "Eggs",
      "Milk"
    ],
    allergens: ["Eggs", "Dairy", "Wheat", "Gluten"],
    additionalImages: [
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80"
    ],
    nutritionalInfo: {
      servingSize: "100g",
      calories: 390,
      protein: 5,
      carbohydrates: 52,
      fat: 19
    },
    storageInstructions: "Store in the refrigerator",
    shelfLife: "Best consumed within 4 days"
  },
  {
    id: 7,
    name: "Mirror Glaze Galaxy Cake",
    description: "Stunning mirror glaze cake with galaxy effect and edible glitter",
    price: "Rs. 2500.00",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
    category: "Modern",
    isVeg: true,
    quantity: "2-layer cake (serves 12-15)",
    ingredients: [
      "Mirror glaze",
      "Chocolate mousse",
      "Edible glitter",
      "Food coloring",
      "White chocolate",
      "Cream",
      "Gelatin"
    ],
    allergens: ["Dairy", "Gluten"],
    additionalImages: [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=800&q=80"
    ],
    nutritionalInfo: {
      servingSize: "100g",
      calories: 410,
      protein: 4,
      carbohydrates: 48,
      fat: 24
    },
    storageInstructions: "Store in the refrigerator",
    shelfLife: "Best consumed within 3 days"
  },
  {
    id: 8,
    name: "Geometric Gold Cake",
    description: "Modern geometric design with edible gold leaf and sharp angles",
    price: "Rs. 2800.00",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=80",
    category: "Modern",
    isVeg: false,
    quantity: "3-layer cake (serves 15-20)",
    ingredients: [
      "Vanilla bean cake",
      "Gold leaf",
      "Fondant",
      "Buttercream",
      "Eggs",
      "Cream",
      "Sugar"
    ],
    allergens: ["Eggs", "Dairy", "Wheat", "Gluten"],
    additionalImages: [
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80"
    ],
    nutritionalInfo: {
      servingSize: "100g",
      calories: 425,
      protein: 5,
      carbohydrates: 51,
      fat: 22
    },
    storageInstructions: "Store in the refrigerator",
    shelfLife: "Best consumed within 4 days"
  },
  {
    id: 9,
    name: "Sugar-Free Fruit Cake",
    description: "Specialty cake made with natural sweeteners and fresh fruits",
    price: "Rs. 2200.00",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80",
    category: "Specialty",
    isVeg: true,
    quantity: "2-layer cake (serves 10-12)",
    ingredients: [
      "Almond flour",
      "Fresh fruits",
      "Stevia",
      "Coconut oil",
      "Eggs",
      "Vanilla extract",
      "Greek yogurt"
    ],
    allergens: ["Eggs", "Dairy", "Nuts"],
    additionalImages: [
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
    ],
    nutritionalInfo: {
      servingSize: "100g",
      calories: 280,
      protein: 8,
      carbohydrates: 24,
      fat: 18
    },
    storageInstructions: "Store in the refrigerator",
    shelfLife: "Best consumed within 3 days"
  },
  {
    id: 10,
    name: "Gluten-Free Chocolate Cake",
    description: "Rich chocolate cake made with gluten-free flour blend",
    price: "Rs. 2400.00",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    category: "Specialty",
    isVeg: false,
    quantity: "2-layer cake (serves 10-12)",
    ingredients: [
      "Gluten-free flour blend",
      "Dark chocolate",
      "Almond milk",
      "Coconut oil",
      "Eggs",
      "Cocoa powder",
      "Xanthan gum"
    ],
    allergens: ["Eggs", "Nuts"],
    additionalImages: [
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80"
    ],
    nutritionalInfo: {
      servingSize: "100g",
      calories: 320,
      protein: 6,
      carbohydrates: 38,
      fat: 16
    },
    storageInstructions: "Store in the refrigerator",
    shelfLife: "Best consumed within 4 days"
  }
];

export const sweeties: Product[] = [
  {
    id: 1,
    name: "Classic Chocolate Brownies",
    description: "Rich, fudgy brownies with a perfect crackly top",
    price: "Rs. 50.00",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    category: "Brownies",
    isVeg: true,
    quantity: "1 piece (80g)",
    ingredients: [
      "Dark chocolate (70% cocoa)",
      "Organic flour",
      "Free-range eggs",
      "European butter",
      "Brown sugar",
      "Pure vanilla extract",
      "Sea salt"
    ],
    allergens: ["Eggs", "Dairy", "Wheat", "Gluten"],
    additionalImages: [
      "https://images.unsplash.com/photo-1589375025852-a66cca98b1b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=800&q=80"
    ],
    nutritionalInfo: {
      servingSize: "80g",
      calories: 320,
      protein: 4,
      carbohydrates: 38,
      fat: 16
    },
    storageInstructions: "Store in an airtight container at room temperature",
    shelfLife: "Best consumed within 5 days"
  },
  {
    id: 2,
    name: "Mango Mousse",
    description: "Delicious mango mousse with a light and airy texture",
    price: "Rs. 60.00",
    image: "/assets/mangomousse.png",
    category: "Mousses",
    isVeg: true,
    quantity: "1 piece (25g)",
    ingredients: [
      "Almond flour",
      "Powdered sugar",
      "Egg whites",
      "Food coloring",
      "Various fillings"
    ],
    allergens: ["Eggs", "Nuts", "Dairy"],
    additionalImages: [
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?auto=format&fit=crop&w=800&q=80"
    ],
    nutritionalInfo: {
      servingSize: "25g",
      calories: 120,
      protein: 2,
      carbohydrates: 18,
      fat: 6
    },
    storageInstructions: "Store in an airtight container in the refrigerator",
    shelfLife: "Best consumed within 7 days"
  },
  {
    id: 3,
    name: "Chocolate Chip Cookies",
    description: "Classic cookies with premium chocolate chips",
    price: "Rs. 40.00",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    category: "Cookies",
    isVeg: true,
    quantity: "1 piece (50g)",
    ingredients: [
      "Premium chocolate chips",
      "Butter",
      "Brown sugar",
      "Flour",
      "Eggs",
      "Vanilla extract"
    ],
    allergens: ["Eggs", "Dairy", "Wheat", "Gluten"],
    additionalImages: [
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?auto=format&fit=crop&w=800&q=80"
    ],
    nutritionalInfo: {
      servingSize: "50g",
      calories: 250,
      protein: 3,
      carbohydrates: 32,
      fat: 12
    },
    storageInstructions: "Store in an airtight container at room temperature",
    shelfLife: "Best consumed within 7 days"
  }
];

export function getProductById(id: number, type: 'cake' | 'sweet'): Product | undefined {
  return type === 'cake' 
    ? cakes.find(cake => cake.id === id)
    : sweeties.find(sweet => sweet.id === id);
}