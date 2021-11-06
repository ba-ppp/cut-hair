export interface Baber {
  id: string;
  avt: string;
  firstName: string;
  lastName: string;
  position: string;
  gender?: string;
  contact?: string;
  address?: string;
  birthDay?: string;
  isActive?: boolean;
  salary?: number;
}

export interface ProductItem {
  id: string;
  name: string;
  price: number;
}
