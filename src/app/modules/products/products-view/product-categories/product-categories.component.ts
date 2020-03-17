import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductCategory} from '../../../../shared/models/product/product';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {
  @Input() productCategories: ProductCategory[];

  @Output() changeCategory: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler(event: any) {
    const categoryId = this.productCategories.find(it => it.stockGroupName.includes(event.target.innerText));
    if (categoryId?.stockGroupId) {
      this.changeCategory.emit(categoryId.stockGroupId);
    } else {
      this.changeCategory.emit(0);
    }
  }

}
