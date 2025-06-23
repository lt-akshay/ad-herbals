import { Product } from '../types/product';
import bluberry from '../images/handwash/hand_wash_blueberry.webp';
import lemon from '../images/handwash/hand_wash_lemon.jpg';
import neem from '../images/handwash/hand_wash_neem.jpg';
import vitaminc from '../images/facewash/face_wash_vitaminc.jpg';
import shampoo from '../images/hareCare/green_shampoo.jpg';
import shampoo100 from '../images/hareCare/green_shampoo_100ml.webp';
import onion from '../images/hareCare/onion_hair_oil.jpg';
import alovera from '../images/bodyCare/aloevera.webp';
import fruitbl from '../images/bodyCare/body_lotion_fruit.webp';
import honey from '../images/bodyCare/body_lotion_honey&almond.webp';
import lavender from '../images/bodyCare/body_wash_lavender.jpg';
import ocean_bridge from '../images/bodyCare/body_wash_ocean_bridge.webp';
import chandan from '../images/bodyCare/chandan&kesar.webp';
import cleansing from '../images/bodyCare/cleansing_milk.webp';
import coconut from '../images/bodyCare/coconut_cream.webp';
import rose from '../images/bodyCare/rose_moisturizer.webp';
import saffron from '../images/bodyCare/saffron_massage_cream.webp';
import skin_brightening from '../images/facewash/skin_brightening.jpg';
import kanchnar from '../images/medicine/kanchnar.jpg';
import makaiKutki from '../images/medicine/makaiKutki.jpg';
import aloeliv from '../images/medicine/ALOELIV.jpg';
import gasog from '../images/medicine/GASOG.jpg';
import narioop from '../images/medicine/NARIROOP.jpg';
import healthCare1 from '../images/medicine/health_care1.webp';
import bodyCare2 from '../images/bodyCare/body_care2.webp';
import faceCare2 from '../images/facewash/face_care2.webp';
import hairCare1 from '../images/hareCare/hair_care1.webp';
import hairCare2 from '../images/hareCare/hair_care2.webp';



export const products: Product[] = [
  {
    id: '1',
    name: 'Alovera Moisturing Gel',
    category: 'Face Care',
    type: 'cosmetic',
    image: alovera,
    price: 60,
    description: 'Aloe vera is a gel-like substance obtained from aloe, which is a succulent plant that typically grows in hot, dry climates. "[Aloe vera] has antioxidant, antibacterial and anti- inflammatory properties that boost healing, moisturize the skin and prevent aging."It supports the production and release of collagen.',
    featured: true,
    promo: {
      discountPercentage: 20,
      code: 'AD20',
    },
  },
  {
    id: '2',
    name: 'Vitamin C Face Wash',
    category: 'Face Care',
    type: 'cosmetic',
    image: vitaminc,
    price: 110,
    description: 'An intensely hydrating serum that locks in moisture and gives your skin a radiant glow. Perfect for all skin types.',
    featured: true,
     benefits: [
    'Anti-Hairfall',
    'Anti-Dandruff',
    'Adds strength and shine',
    'Boosts hair growth',
    'Controls scalp inflammation'
  ],

  indications: "Helps in making roots strong and hair voluminous Prevents early greying of hair Reduces baldness Reduces hair fall"
  },
  {
  id: '3',
  name: 'Onion Herbal Hair Oil',
  category: 'Health Care',
  type: 'medicine',
  image: onion, // import this or use a URL
  price: 295,
  featured: true,
  description: 'This powerful remedy protects and nourishes hair to reduce hair loss and breakage, with the added benefits of Fenugreek.',

  benefits: [
    'Anti-Hairfall',
    'Anti-Dandruff',
    'Adds strength and shine',
    'Boosts hair growth',
    'Controls scalp inflammation'
  ],

  indications: "Helps in making roots strong and hair voluminous Prevents early greying of hair Reduces baldness Reduces hair fall"
},
  {
    id: '4',
    name: 'Rose Moisturizer',
    category: 'Face Care',
    type: 'cosmetic',
    image: rose,
    price: 70,
    description: 'It effectively blocks that process in the skin that leads to discoloration. Rose Moisturizer also reduces any redness, rash, pain, or itchiness that may be caused by this condition. This improves your self-esteem and confidence as your appearance changes.',
    featured: false,    
  },
  {
    id: '5',
    name: 'Skin Brightening Face Wash',
    category: 'Face Care',
    type: 'cosmetic',
    image: skin_brightening,
    price: 150,
    description: 'Gentle yet effective exfoliating scrub that removes dead skin cells and unclogs pores for smoother skin.',
    featured: false,
     benefits: [
    'Anti-Hairfall',
    'Anti-Dandruff',
    'Adds strength and shine',
    'Boosts hair growth',
    'Controls scalp inflammation'
  ],

  indications: "Helps in making roots strong and hair voluminous Prevents early greying of hair Reduces baldness Reduces hair fall"
  },
  {
    id: '6',
    name: 'Nourishing Shampoo',
    category: 'Health Care',
    type: 'medicine',
    image: shampoo,
    price: 120,
    description: 'Get rid of that bad hair day with just one squeeze of shampoo and also get the benefits of coconut.',
    featured: false,
     benefits: [
      'Control Dandruff',
 'Treat Hair loss',
 'Accelerate hair growth',
 'Smooth and shine hair'
  ],

  indications: "Helps in making roots strong and hair voluminous Prevents early greying of hair Reduces baldness Reduces hair fall"
  },
  {
    id: '7',
    name: 'Lavendar Body Wash',
    category: 'Body Care',
    type: 'cosmetic',
    image: lavender,
    price: 80,
    description: 'A deeply nourishing conditioner that repairs damaged hair and prevents split ends for healthier, shinier hair.',
    featured: false,
     benefits: [
    'Anti-Hairfall',
    'Anti-Dandruff',
    'Adds strength and shine',
    'Boosts hair growth',
    'Controls scalp inflammation'
  ],

  indications: "Helps in making roots strong and hair voluminous Prevents early greying of hair Reduces baldness Reduces hair fall"
  },
  {
    id: '8',
    name: 'Honey & Almond Body Lotion',
    category: 'Body Care',
    type: 'cosmetic',
    image: honey,
    price: 90,
    description: 'Honey moisturizes the skin making it smooth, firm, and youthful. Almond oil protects the skin from dryness and wrinkles. Absorbs into the skin quickly, making it firm and healthy without leaving it greasy.',
    featured: true,
  },
  {
    id: '9',
    name: 'Fruits Body Lotion',
    category: 'Body Care',
    type: 'cosmetic',
    image: fruitbl,
    price: 90,
    description: 'Active fruit boosters present in the body lotion revitalize skin for youthful beauty, result in softer, silky, younger looking skin. Its lightweight formula absorbs easily into the skin and makes it ideal for all year-round use making the skin glow with health and vitality.',
    featured: false,    
  },
  {
    id: '10',
    name: 'Lemon Grass Hand Wash',
    category: 'Body Care',
    type: 'cosmetic',
    image: lemon,
    price: 170,
    description: 'High protection sunscreen that shields skin from harmful UV rays while hydrating and nourishing.',
    featured: false,
     benefits: [
    'Anti-Hairfall',
    'Anti-Dandruff',
    'Adds strength and shine',
    'Boosts hair growth',
    'Controls scalp inflammation'
  ],

  indications: "Helps in making roots strong and hair voluminous Prevents early greying of hair Reduces baldness Reduces hair fall"
  },
  {
    id: '11',
    name: 'Ocean Bridge Body Wash',
    category: 'Body Care',
    type: 'cosmetic',
    image: ocean_bridge,
    price: 149,
    description: 'A cooling, soothing gel that calms sun-exposed skin, reduces redness, and prevents peeling.',
    featured: false,
     benefits: [
    'Anti-Hairfall',
    'Anti-Dandruff',
    'Adds strength and shine',
    'Boosts hair growth',
    'Controls scalp inflammation'
  ],

  indications: "Helps in making roots strong and hair voluminous Prevents early greying of hair Reduces baldness Reduces hair fall"
  },
  {
    id: '12',
    name: 'Coconut Anti-Aging Cream',
    category: 'Face Care',
    type: 'cosmetic',
    image: coconut,
    price: 125,
    description: 'A rich night cream that works while you sleep to reduce wrinkles and improve skin elasticity.',
    featured: true,
     benefits: [
     'Hydration.',
 'Visibly Smooths and soften.',
 'Minimizes the look of fine.',
 'lines and wrinkles.',
 'Helps visibly reduce redness.',
 'and skin irritation.',
 'Nutrient-rich antioxidants.',
 'Absorbs easily for instant hydration.',
 'Great exfoliant base coconut cream.'
  ],

  indications: "Helps in making roots strong and hair voluminous Prevents early greying of hair Reduces baldness Reduces hair fall"
  },
  {
    id: '13',
    name: 'Bluberry & Tea Tree Hand Wash',
    category: 'Body Care',
    type: 'cosmetic',
    image: bluberry,
    price: 120,
    description: 'A rich night cream that works while you sleep to reduce wrinkles and improve skin elasticity.',
    featured: true,
     benefits: [
    'Anti-Hairfall',
    'Anti-Dandruff',
    'Adds strength and shine',
    'Boosts hair growth',
    'Controls scalp inflammation'
  ],

  indications: "Helps in making roots strong and hair voluminous Prevents early greying of hair Reduces baldness Reduces hair fall"
  },
  {
    id: '14',
    name: 'Chandan and Kesar Gel',
    category: 'Face Care',
    type: 'cosmetic',
    image: chandan,
    price: 125,
    description: 'Chandan and Kesar Gel Known to be an antiseptic agent, Sandalwood, popularly known as Chandan in India, is also said to be a natural healer in Ayurveda.AD Herbals Sandalwood Face Gel helps reduce inflammation,soothe sunburns, fight acne causing bacteria, and remove sun tan.',
    featured: false,
     benefits: [
    ' It helps to fight Acne & Wrinkles',
    ],

  },
  {
    id: '15',
    name: 'Neem and Tulsi Hand Wash',
    category: 'Body Care',
    type: 'cosmetic',
    image: neem,
    price: 135,
    description: 'A rich night cream that works while you sleep to reduce wrinkles and improve skin elasticity.',
    featured: false,
     benefits: [
    'Anti-Hairfall',
    'Anti-Dandruff',
    'Adds strength and shine',
    'Boosts hair growth',
    'Controls scalp inflammation'
  ],

  indications: "Helps in making roots strong and hair voluminous Prevents early greying of hair Reduces baldness Reduces hair fall"
  },
  {
    id: '16',
    name: 'Saffron Massage Cream',
    category: 'Face Care',
    type: 'cosmetic',
    image: saffron,
    price: 299,
    description: 'Constant use of saffron can improve your skin tone, smoothen its texture, and brighten your appearance. It can also help reduce excessive sun tan and thus provide a natural radiance. In addition, this red-colored flower helps treat hyperpigmentation, acne, and scars and helps you have a blemish-free appearance.',
    featured: false,
     benefits: [
    'Anti-Hairfall',
    'Anti-Dandruff',
    'Adds strength and shine',
    'Boosts hair growth',
    'Controls scalp inflammation'
  ],

  indications: "Helps in making roots strong and hair voluminous Prevents early greying of hair Reduces baldness Reduces hair fall"
  },
  {
    id: '17',
    name: 'Refreshing Cleansing Milk',
    category: 'Face Care',
    type: 'cosmetic',
    image: cleansing,
    price: 70,
    description: 'Cleansing milk is an excellent choice for those with dry or sensitive skin. Its creamy texture and nourishing ingredients help to hydrate and purify the skin, leaving it feeling soft and supple. Cleansing milk also helps to remove impurities from the skin, leaving it looking nourished and glowing.',
    featured: false,  
  },
  {
    id: '18',
    name: 'Kanchnar',
    category: 'Health Care',
    type: 'medicine',
    image: kanchnar,
    price: 160,
    description: 'Cleansing milk is an excellent choice for those with dry or sensitive skin. Its creamy texture and nourishing ingredients help to hydrate and purify the skin, leaving it feeling soft and supple. Cleansing milk also helps to remove impurities from the skin, leaving it looking nourished and glowing.',
    featured: false,  
  },
  {
    id: '19',
    name: 'Makai Kutkki',
    category: 'Health Care',
    type: 'medicine',
    image: makaiKutki,
    price: 150,
    description: 'Cleansing milk is an excellent choice for those with dry or sensitive skin. Its creamy texture and nourishing ingredients help to hydrate and purify the skin, leaving it feeling soft and supple. Cleansing milk also helps to remove impurities from the skin, leaving it looking nourished and glowing.',
    featured: false,  
  },
  {
    id: '20',
    name: 'Aloeliv',
    category: 'Health Care',
    type: 'medicine',
    image: aloeliv,
    price: 150,
    description: 'Cleansing milk is an excellent choice for those with dry or sensitive skin. Its creamy texture and nourishing ingredients help to hydrate and purify the skin, leaving it feeling soft and supple. Cleansing milk also helps to remove impurities from the skin, leaving it looking nourished and glowing.',
    featured: false,  
  },
  {
    id: '21',
    name: 'Gaso-G',
    category: 'Health Care',
    type: 'medicine',
    image: gasog,
    price: 150,
    description: 'Cleansing milk is an excellent choice for those with dry or sensitive skin. Its creamy texture and nourishing ingredients help to hydrate and purify the skin, leaving it feeling soft and supple. Cleansing milk also helps to remove impurities from the skin, leaving it looking nourished and glowing.',
    featured: false,  
  },
  {
    id: '22',
    name: 'Nari-roop DS',
    category: 'Health Care',
    type: 'medicine',
    image: narioop,
    price: 150,
    description: 'Cleansing milk is an excellent choice for those with dry or sensitive skin. Its creamy texture and nourishing ingredients help to hydrate and purify the skin, leaving it feeling soft and supple. Cleansing milk also helps to remove impurities from the skin, leaving it looking nourished and glowing.',
    featured: false,  
  },
  {
    id: '23',
    name: 'Nourishing Shampoo',
    category: 'Hair Care',
    type: 'cosmetic',
    image: shampoo100,
    price: 120,
    description: 'Get rid of that bad hair day with just one squeeze of shampoo and also get the benefits of coconut.',
    featured: false,
     benefits: [
      'Control Dandruff',
 'Treat Hair loss',
 'Accelerate hair growth',
 'Smooth and shine hair'
  ],

  indications: "Helps in making roots strong and hair voluminous Prevents early greying of hair Reduces baldness Reduces hair fall"
  },
];

export const categories = [
  { id: 'health-care', name: 'Health Care', image: healthCare1 },
  { id: 'face-care', name: 'Face Care', image: faceCare2 },
  { id: 'body-care', name: 'Body Care', image: bodyCare2 },
  { id: 'hair-care', name: 'Hair Care', image: hairCare2 }
];