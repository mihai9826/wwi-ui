import {Product} from '../product/product';

export class OrderLine {
  orderLineId: number;
  stockItem: Product;
  quantity: number;
  totalUnitPrice: number;
}
