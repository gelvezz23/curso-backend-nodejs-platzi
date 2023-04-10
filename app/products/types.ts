export interface ProductsProps {
  id?: string;
  name?: string;
  image?: string;
  description?: string;
  categoryId?: number;
  offset?: string;
  limit?: string;
  price?: number | string;
  priceMin?: number | string;
  priceMax?: number | string;
}
