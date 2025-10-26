export interface PlantOption {
  option: string;
  price: number;
  quantity: number;
}

export interface ProductItem {
  id: number;
  name: string;
  category: string;
  type: string;
  options: PlantOption[];
  image: string;
}

export interface ProductReview {
  rating: number;
  title: string | null;
  author: string;
  text: string;
}

export type ProductReviews = ProductReview[] | null;
