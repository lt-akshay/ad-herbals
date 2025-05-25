import { Product, Category } from '../types/product';
import { products as initialProducts, categories as initialCategories } from '../data/products';

// Load data from localStorage or use initial data
const loadData = <T>(key: string, initialData: T): T => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : initialData;
};

// Save data to localStorage
const saveData = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Products
export const getProducts = (): Product[] => {
  return loadData('products', initialProducts);
};

export const saveProducts = (products: Product[]): void => {
  saveData('products', products);
};

export const addProduct = (product: Omit<Product, 'id'>): Product => {
  const products = getProducts();
  const newProduct = {
    ...product,
    id: Date.now().toString(),
  };
  products.push(newProduct);
  saveProducts(products);
  return newProduct;
};

export const updateProduct = (id: string, product: Partial<Product>): Product | null => {
  const products = getProducts();
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return null;
  
  products[index] = { ...products[index], ...product };
  saveProducts(products);
  return products[index];
};

export const deleteProduct = (id: string): boolean => {
  const products = getProducts();
  const filtered = products.filter(p => p.id !== id);
  if (filtered.length === products.length) return false;
  
  saveProducts(filtered);
  return true;
};

// Categories
export const getCategories = (): Category[] => {
  return loadData('categories', initialCategories);
};

export const saveCategories = (categories: Category[]): void => {
  saveData('categories', categories);
};

export const addCategory = (category: Omit<Category, 'id'>): Category => {
  const categories = getCategories();
  const newCategory = {
    ...category,
    id: Date.now().toString(),
  };
  categories.push(newCategory);
  saveCategories(categories);
  return newCategory;
};

export const updateCategory = (id: string, category: Partial<Category>): Category | null => {
  const categories = getCategories();
  const index = categories.findIndex(c => c.id === id);
  if (index === -1) return null;
  
  categories[index] = { ...categories[index], ...category };
  saveCategories(categories);
  return categories[index];
};

export const deleteCategory = (id: string): boolean => {
  const categories = getCategories();
  const filtered = categories.filter(c => c.id !== id);
  if (filtered.length === categories.length) return false;
  
  saveCategories(filtered);
  return true;
};