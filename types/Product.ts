export interface ProductType {
  _id: string;
  name: string;
  description: string;
  price: string;
  price_id: string;
  images: Array<{ url: string }>;
  slug: string;
  categories: string[];
  // length: number;
}
