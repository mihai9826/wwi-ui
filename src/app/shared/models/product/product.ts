export class Product {
  stockItemId: number;
  stockItemName: string;
  unitPrice: number;
  soldOut: boolean;
}

export class ProductCategory {
  stockGroupId: number;
  stockGroupName: string;
}

export class ProductPage {
  content: Product[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  numberOfElements;
}
