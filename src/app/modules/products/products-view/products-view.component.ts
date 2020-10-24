import {Component, OnInit} from '@angular/core';

import {ProductsService} from '../service/products.service';
import {Product, ProductCategory} from '../../../shared/models/product/product';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  allProducts: Product[];
  productCategories: ProductCategory[];
  categoryId;
  itemsPerPage = 18;
  totalElements;
  page = 1;
  previousPage;
  sortParam: string;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loadData();

    this.productsService.getProductCategories().subscribe(data => this.productCategories = data);
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadData(this.categoryId);
    }
  }

  loadData(event?: number) {
    if (event) {
      this.categoryId = event;
      if (this.sortParam) {
        this.productsService.sortProductsOfCategory(this.sortParam, this.categoryId, this.page - 1, this.itemsPerPage)
          .subscribe(data => {
            this.allProducts = data.content;
            this.totalElements = data.totalElements;
            this.itemsPerPage = data.size;
          });
        return;
      } else {
        this.productsService.getProductsOfCategory(this.categoryId, this.page - 1, this.itemsPerPage).subscribe(
          data => {
            this.allProducts = data.content;
            this.totalElements = data.totalElements;
            this.itemsPerPage = data.size;
          }
        );
        return;
      }
    }
    if (this.sortParam) {
      this.productsService.sortAllProductsByPrice(this.sortParam, this.page - 1, this.itemsPerPage).subscribe(data => {
        this.allProducts = data.content;
        this.totalElements = data.totalElements;
        this.itemsPerPage = data.size;
      });
      this.categoryId = 0;
    } else {
      this.productsService.getAllProducts(this.page - 1, this.itemsPerPage).subscribe(
        data => {
          this.allProducts = data.content;
          this.totalElements = data.totalElements;
          this.itemsPerPage = data.size;
        }
      );
      this.categoryId = 0;
    }
  }

  itemsDropDownChange(event: any) {
    this.itemsPerPage = event.target.value;
    this.loadData(this.categoryId);
  }

  sortDropDownChange(event: any) {
    if (this.categoryId) {
      if (event.target.value === '') {
        this.sortParam = '';
        this.productsService.getProductsOfCategory(this.categoryId, this.page - 1, this.itemsPerPage).subscribe(data => {
          this.allProducts = data.content;
          this.totalElements = data.totalElements;
          this.itemsPerPage = data.size;
        });
      } else {
        this.sortParam = event.target.value;
        this.productsService.sortProductsOfCategory(event.target.value, this.categoryId, this.page - 1, this.itemsPerPage)
          .subscribe(data => {
            this.allProducts = data.content;
            this.totalElements = data.totalElements;
            this.itemsPerPage = data.size;
          });
      }
    } else {
      if (event.target.value === '') {
        this.sortParam = '';
        this.productsService.getAllProducts(this.page - 1, this.itemsPerPage).subscribe(data => {
          this.allProducts = data.content;
          this.totalElements = data.totalElements;
          this.itemsPerPage = data.size;
        });
      } else {
        this.sortParam = event.target.value;
        this.productsService.sortAllProductsByPrice(event.target.value, this.page - 1, this.itemsPerPage).subscribe(data => {
          this.allProducts = data.content;
          this.totalElements = data.totalElements;
          this.itemsPerPage = data.size;
        });
      }
    }
  }
}
