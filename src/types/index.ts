export interface Product {
  id: string;
  storeId: string;
  photo: string;
  name: string;
  sku: string;
  description: string;
  price: number;
  discount: number;
  category: string;
  sizes: string;
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Store {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
