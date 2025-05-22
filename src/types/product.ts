export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  description: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}