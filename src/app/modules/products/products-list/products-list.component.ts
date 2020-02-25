import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  type = 'success';
  allProducts: Post[];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllPosts().subscribe(data => this.allProducts = data);
  }

}
