import { Product } from '../types/product';
import bluberry from '../images/handwash/hand_wash_blueberry.jpg';
import lemon from '../images/handwash/hand_wash_lemon.jpg';
import neem from '../images/handwash/hand_wash_neem.jpg';
import vitaminc from '../images/facewash/face_wash_vitaminc.jpg';
import shampoo from '../images/hareCare/green_shampoo.png';
import shampoo100 from '../images/hareCare/green_shampoo_100ml.png';
import onion from '../images/hareCare/onion_hair_oil.png';
import alovera from '../images/bodyCare/aloevera.png';
import fruitbl from '../images/bodyCare/body_lotion_fruit.png';
import honey from '../images/bodyCare/body_lotion_honey&almond.png';
import lavender from '../images/bodyCare/body_wash_lavender.jpg';
import ocean_bridge from '../images/bodyCare/body_wash_ocean_bridge.jpg';
import chandan from '../images/bodyCare/chandan&kesar.png';
import cleansing from '../images/bodyCare/cleansing_milk.png';
import coconut from '../images/bodyCare/coconut_cream.png';
import rose from '../images/bodyCare/rose_moisture.png';
import saffron from '../images/bodyCare/saffron_massage_cream.png';
import skin_brightening from '../images/bodyCare/skin_brightening.jpg';


export const products: Product[] = [
  {
    id: '1',
    name: 'Alovera Moisturing Gel',
    category: 'Face Care',
    image: alovera,
    price: 24.99,
    description: 'Alovera Moisturing Gel with Alovera pulp, manjishtha and turmeric extract.',
    featured: true,
  },
  {
    id: '2',
    name: 'Vitamin C Face Wash',
    category: 'Face Care',
    image: vitaminc,
    price: 29.99,
    description: 'An intensely hydrating serum that locks in moisture and gives your skin a radiant glow. Perfect for all skin types.',
    featured: true,
  },
  {
    id: '3',
    name: 'Onion Herbal Hair Oil',
    category: 'Body Care',
    image: onion,
    price: 18.99,
    description: 'A gentle, fragrant body lotion that keeps your skin soft and supple all day long with natural ingredients.',
    featured: true,
  },
  {
    id: '4',
    name: 'Rose Moisturizer',
    category: 'Face Care',
    image: rose,
    price: 22.99,
    description: 'Target dark circles and puffiness with this revitalizing eye cream enriched with caffeine and peptides.',
    featured: false,
  },
  {
    id: '5',
    name: 'Skin Brightening Face Wash',
    category: 'Face Care',
    image: skin_brightening,
    price: 15.99,
    description: 'Gentle yet effective exfoliating scrub that removes dead skin cells and unclogs pores for smoother skin.',
    featured: false,
  },
  {
    id: '6',
    name: 'Nourishing Shampoo',
    category: 'Hair Care',
    image: shampoo,
    price: 12.99,
    description: 'A gentle, nourishing shampoo that cleans and strengthens hair, leaving it soft, shiny, and manageable.',
    featured: false,
  },
  {
    id: '7',
    name: 'Lavendar Body Wash',
    category: 'Hair Care',
    image: lavender,
    price: 12.99,
    description: 'A deeply nourishing conditioner that repairs damaged hair and prevents split ends for healthier, shinier hair.',
    featured: false,
  },
  {
    id: '8',
    name: 'Honey & Almond Body Lotion',
    category: 'Face Care',
    image: honey,
    price: 19.99,
    description: 'A clay-based face mask that draws out impurities, tightens pores, and leaves skin feeling refreshed and clean.',
    featured: true,
  },
  {
    id: '9',
    name: 'Fruits Body Lotion',
    category: 'Body Care',
    image: fruitbl,
    price: 9.99,
    description: 'An intensive hand cream that repairs and protects dry, cracked hands with natural oils and butters.',
    featured: false,
  },
  {
    id: '10',
    name: 'Lemon Grass Hand Wash',
    category: 'Sun Care',
    image: lemon,
    price: 17.99,
    description: 'High protection sunscreen that shields skin from harmful UV rays while hydrating and nourishing.',
    featured: false,
  },
  {
    id: '11',
    name: 'Ocean Bridge Body Wash',
    category: 'Sun Care',
    image: ocean_bridge,
    price: 14.99,
    description: 'A cooling, soothing gel that calms sun-exposed skin, reduces redness, and prevents peeling.',
    featured: false,
  },
  {
    id: '12',
    name: 'Coconut Anti-Aging Cream',
    category: 'Face Care',
    image: coconut,
    price: 34.99,
    description: 'A rich night cream that works while you sleep to reduce wrinkles and improve skin elasticity.',
    featured: true,
  },
  {
    id: '13',
    name: 'Bluberry & Tea Tree Hand Wash',
    category: 'Face Care',
    image: bluberry,
    price: 34.99,
    description: 'A rich night cream that works while you sleep to reduce wrinkles and improve skin elasticity.',
    featured: true,
  },
  {
    id: '14',
    name: 'Chandan and Kesar Gel',
    category: 'Face Care',
    image: chandan,
    price: 34.99,
    description: 'A rich night cream that works while you sleep to reduce wrinkles and improve skin elasticity.',
    featured: false,
  },
  {
    id: '15',
    name: 'Neem and Tulsi Hand Wash',
    category: 'Face Care',
    image: neem,
    price: 34.99,
    description: 'A rich night cream that works while you sleep to reduce wrinkles and improve skin elasticity.',
    featured: false,
  },
  {
    id: '16',
    name: 'Saffron Massage Cream',
    category: 'Face Care',
    image: saffron,
    price: 34.99,
    description: 'A rich night cream that works while you sleep to reduce wrinkles and improve skin elasticity.',
    featured: false,
  },
  {
    id: '17',
    name: 'Refreshing Cleansing Milk',
    category: 'Face Care',
    image: cleansing,
    price: 34.99,
    description: 'A rich night cream that works while you sleep to reduce wrinkles and improve skin elasticity.',
    featured: false,
  },
];

export const categories = [
  { id: 'face-care', name: 'Face Care', image: 'https://images.pexels.com/photos/3737594/pexels-photo-3737594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 'body-care', name: 'Body Care', image: 'https://images.pexels.com/photos/6621447/pexels-photo-6621447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 'hair-care', name: 'Hair Care', image: 'https://images.pexels.com/photos/3737579/pexels-photo-3737579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 'sun-care', name: 'Sun Care', image: 'https://images.pexels.com/photos/3737591/pexels-photo-3737591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];