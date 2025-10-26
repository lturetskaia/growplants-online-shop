export interface ProductItem {
  id: number,
  name: string;
  category: string;
  type: string;
  quantity: number;
  price: number;
  description: string;
  image: string;
}

export interface ProductReview {
  rating: number;
  title: string|null;
  author: string;
  text: string;
}

export type ProductReviews = ProductReview[]|null;