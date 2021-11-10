export interface Baber {
  id: string;
  avt: string;
  name: string;
  position: string;
  gender?: string;
  contact?: string;
  address?: string;
  birthDay?: string;
  isActive?: boolean;
  salary?: number;
}

export interface Product {
  id: string;
  name: string; // name group of product
  items: ProductItem[];
}

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface Customer {
  id: string;
  name: string;
  date: Date;
  phone: string;
}

export interface Service {
  id: string;
  name: string; // name group of service
  items: ServiceItem[];
}

// export type Ser = Record<string, ServiceItem[]>

export interface ServiceItem {
  id: string;
  name: string;
  image: string;
}
