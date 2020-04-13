import {User} from '../auth/user';
import {OrderLine} from './order-line';

export class Order {
  orderId: number;
  contactPerson: User;
  orderLines: OrderLine[] = [];
  comments: string | null;
  deliveryAddress: string;
  orderValue: number;
  status: string;
  orderDate: string;
}
