import {Customer} from './customer';
import {Facility} from './facility';

export interface Contract {
  id: string;
  customer: Customer;
  facility: Facility;
  startDay: string;
  endDay: string;
  deposit: string;
  total: string;
}
