export interface ProductOption {
  option: string;
  price: number;
  quantity: number;
}

export interface ProductItem {
  id: number;
  name: string;
  description: string;
  category: string;
  type: string;
  options: ProductOption[];
  image: string[];
}

export interface ProductReview {
  rating: number;
  title: string | null;
  author: string;
  text: string;
}

export type ProductReviews = ProductReview[] | null;

export interface CartItem {
  id: number;
  name: string;
  category: string;
  option: string;
  quantity: number;
}

export type CartData = CartItem[] | null;
