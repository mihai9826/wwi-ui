export class AdminProductDTO {
  stockItemId: number;
  stockItemName: string;
  unitPrice: number;
  typicalWeightPerUnit: number;
  quantityOnHand: number;

  constructor(obj: AdminProductDTO = {} as AdminProductDTO) {
    Object.assign(this, obj);
  }
}
