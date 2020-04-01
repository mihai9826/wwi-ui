import {User} from '../auth/user';
import {CreateOrderLineRequest} from './create-order-line-request';
import {Product} from '../product/product';

export class CreateOrderRequest {
  contactPerson: User;
  orderLines: CreateOrderLineRequest[] = [];
  comments: string | null;
  deliveryAddress: string;
  orderValue: number;

  constructor() { }

  addOrderLine(product: Product) {
    const newOrderLine = new CreateOrderLineRequest(product);
    this.orderLines.push(newOrderLine);
  }
}
