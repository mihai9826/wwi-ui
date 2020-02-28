import {Component, Input, OnInit} from '@angular/core';
import {ProductCategory} from '../../product';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {
  @Input() productCategories: ProductCategory[];

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler(event: any) {
    console.log(event.target.innerText);
  }

}
