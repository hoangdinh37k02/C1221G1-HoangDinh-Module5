import {Customer} from "./customer";

export interface Transaction {
  id: number;
  transactionCode: string;
  customer: Customer;
  transactionDay: string;
  type: string;
  price: number;
  square: number;
}
