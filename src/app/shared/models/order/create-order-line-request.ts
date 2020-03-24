import {Product} from '../product/product';

export class CreateOrderLineRequest {
  stockItem: Product;
  quantity: number;
  totalUnitPrice: number;

  constructor(product?: Product) {
    this.stockItem = product || null;
    this.quantity = 1 || 0;
    this.totalUnitPrice = product ? (this.quantity * this.stockItem.unitPrice) : 0;
  }

  setQuantity(updatedQuantity: number) {
    this.quantity = updatedQuantity;
    this.totalUnitPrice = this.quantity * this.stockItem.unitPrice;
  }
}
