import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import {ProductsService} from '../services/products.service';
import {Product, ProductCategory} from '../product';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {
  type = 'success';
  allProducts: Product[];
  productCategories: ProductCategory[];
  faCoffee = faCoffee;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => this.allProducts = data);

    this.productsService.getProductCategories().subscribe(data => this.productCategories = data);
  }

}
