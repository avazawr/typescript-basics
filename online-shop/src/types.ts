export interface Category {
  name: string;
  description?: string;
}

export interface Product {
  readonly id: number;
  name: string;
  price: number;
  stockCount: number;
  category: Category;
}

export interface Customer {
  readonly id: number;
  name: string;
  email: string;
}

type Status = "pending" | "confirmed" | "shipped";

export interface LineProduct {
  quantity: number;
  product: Product;
}

export interface Order {
  customerId: number;
  products: LineProduct[];
  status: Status;
}
