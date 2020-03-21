import {User} from '../auth/user';
import {OrderLine} from './order-line';

export class Order {
  orderId: number;
  contactPerson: User;
  orderLines: OrderLine[];
  comments?: string;
  deliveryAddress: string;
  orderValue: number;
  orderDate: string;
}
