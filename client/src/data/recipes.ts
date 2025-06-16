
export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  prepTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  rating: number;
  benefits: string[];
  ingredients: Ingredient[];
  instructions: string[];
  tips: string[];
  nutritionFacts: {
    calories: number;
    vitamin_c: string;
    antioxidants: string;
    hydration: string;
  };
}

export interface Ingredient {
  name: string;
  amount: string;
  benefits: string;
}

export const sampleRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Cucumber Mint Detox Water',
    description: 'Refreshing blend that helps reduce bloating and boost hydration with cooling mint and crisp cucumber.',
    image: 'photo-1500375592092-40eb2168fd21',
    prepTime: 5,
    servings: 4,
    difficulty: 'Easy',
    tags: ['Hydrating', 'Anti-inflammatory', 'Digestive', 'Summer'],
    rating: 4.8,
    benefits: [
      'Reduces bloating and water retention',
      'Supports healthy digestion',
      'Provides natural electrolytes',
      'Anti-inflammatory properties'
    ],
    ingredients: [
      {
        name: 'Cucumber',
        amount: '1 large, sliced',
        benefits: 'Rich in silica for healthy skin and natural diuretic'
      },
      {
        name: 'Fresh Mint',
        amount: '10-12 leaves',
        benefits: 'Aids digestion and provides cooling effect'
      },
      {
        name: 'Filtered Water',
        amount: '32 oz',
        benefits: 'Essential for hydration and toxin elimination'
      },
      {
        name: 'Ice Cubes',
        amount: '1 cup',
        benefits: 'Keeps drink refreshing and aids metabolism'
      }
    ],
    instructions: [
      'Wash cucumber thoroughly and slice into thin rounds',
      'Gently muddle mint leaves to release oils',
      'Add cucumber slices and mint to a large pitcher',
      'Pour filtered water over ingredients',
      'Add ice cubes and stir gently',
      'Refrigerate for 2-4 hours for best flavor',
      'Serve chilled and enjoy within 24 hours'
    ],
    tips: [
      'Use organic cucumber to avoid pesticides',
      'Replace ingredients every 24 hours for freshness',
      'Add a pinch of sea salt for electrolyte boost'
    ],
    nutritionFacts: {
      calories: 5,
      vitamin_c: '15% DV',
      antioxidants: 'High',
      hydration: 'Excellent'
    }
  },
  {
    id: '2',
    name: 'Lemon Ginger Immunity Boost',
    description: 'Powerful combination to kickstart your immune system and boost metabolism naturally.',
    image: 'photo-1465146344425-f00d5f5c8f07',
    prepTime: 10,
    servings: 2,
    difficulty: 'Easy',
    tags: ['Immunity', 'Metabolism', 'Anti-inflammatory', 'Morning'],
    rating: 4.9,
    benefits: [
      'Boosts immune system function',
      'Increases metabolism and fat burning',
      'Reduces inflammation naturally',
      'Supports liver detoxification'
    ],
    ingredients: [
      {
        name: 'Fresh Lemon',
        amount: '2 lemons, juiced',
        benefits: 'High in vitamin C and natural detoxifier'
      },
      {
        name: 'Fresh Ginger',
        amount: '1 inch piece, sliced',
        benefits: 'Anti-inflammatory and digestive aid'
      },
      {
        name: 'Raw Honey',
        amount: '1 tablespoon',
        benefits: 'Natural antimicrobial and energy source'
      },
      {
        name: 'Warm Water',
        amount: '16 oz',
        benefits: 'Aids absorption and gentle on stomach'
      }
    ],
    instructions: [
      'Slice fresh ginger into thin pieces',
      'Juice lemons and strain if desired',
      'Add ginger to warm (not boiling) water',
      'Let steep for 5 minutes',
      'Add lemon juice and honey',
      'Stir until honey dissolves completely',
      'Drink warm on empty stomach for best results'
    ],
    tips: [
      'Drink first thing in the morning for maximum benefits',
      'Use organic lemons and wash thoroughly',
      'Adjust honey to taste preference'
    ],
    nutritionFacts: {
      calories: 25,
      vitamin_c: '120% DV',
      antioxidants: 'Very High',
      hydration: 'Good'
    }
  },
  {
    id: '3',
    name: 'Berry Antioxidant Fusion',
    description: 'Antioxidant-rich blend with mixed berries that fights free radicals and supports healthy aging.',
    image: 'photo-1518495973542-4542c06a5843',
    prepTime: 8,
    servings: 3,
    difficulty: 'Easy',
    tags: ['Antioxidant', 'Anti-aging', 'Skin Health', 'Sweet'],
    rating: 4.7,
    benefits: [
      'Fights free radical damage',
      'Supports healthy skin aging',
      'Provides natural energy boost',
      'Rich in vitamins and minerals'
    ],
    ingredients: [
      {
        name: 'Mixed Berries',
        amount: '1 cup (blueberries, strawberries, raspberries)',
        benefits: 'Extremely high in antioxidants and vitamin C'
      },
      {
        name: 'Pomegranate Seeds',
        amount: '1/4 cup',
        benefits: 'Powerful antioxidants and anti-inflammatory'
      },
      {
        name: 'Fresh Basil',
        amount: '4-5 leaves',
        benefits: 'Anti-inflammatory and adds unique flavor'
      },
      {
        name: 'Sparkling Water',
        amount: '24 oz',
        benefits: 'Adds refreshing fizz and hydration'
      }
    ],
    instructions: [
      'Wash all berries and pomegranate seeds thoroughly',
      'Gently muddle half the berries to release juices',
      'Add muddled and whole berries to pitcher',
      'Add pomegranate seeds and basil leaves',
      'Pour sparkling water over fruit',
      'Stir gently to combine',
      'Chill for 1-2 hours before serving'
    ],
    tips: [
      'Use frozen berries if fresh not available',
      'Add stevia for extra sweetness if needed',
      'Consume within 12 hours for best flavor'
    ],
    nutritionFacts: {
      calories: 35,
      vitamin_c: '85% DV',
      antioxidants: 'Extremely High',
      hydration: 'Excellent'
    }
  }
];
