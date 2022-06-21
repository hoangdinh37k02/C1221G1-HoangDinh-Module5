import {Type} from './type';

export interface Product {
  id: number;
  productCode: string;
  productName: string;
  type: Type;
  price: string;
  quantity: number;
}
