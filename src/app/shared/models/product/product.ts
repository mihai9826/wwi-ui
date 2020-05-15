export class Product {
  stockItemId: number;
  stockItemName: string;
  unitPrice: number;
  soldOut: boolean;

  constructor(obj: Product = {} as Product) {
    Object.assign(this, obj);
  }
}

export class ProductCategory {
  stockGroupId: number;
  stockGroupName: string;
}

export class Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  numberOfElements;
}
