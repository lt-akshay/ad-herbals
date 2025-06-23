export interface Product {
  id: string;
  name: string;
  category: string;
  type: string;
  image: string;
  price: number;
  description: string;
  featured?: boolean;
  benefits?:string[];
  indications?:string;
  promo?: {
    discountPercentage: number;
    code: string;
  };
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface User {
  email: string;
  password: string;
}