import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product, ProductCategory, Page} from '../../../shared/models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private REQ_URL = 'http://localhost:8080/warehouse/';

  constructor(private http: HttpClient) { }

  getAllProducts(page: number, size: number): Observable<Page<Product>> {
      return this.http.get<Page<Product>>(this.REQ_URL + `items?page=${page}&size=${size}`);
  }

  getProductsOfCategory(id: number, page: number, size: number): Observable<Page<Product>> {
    return this.http.get<Page<Product>>(this.REQ_URL + `stock/groups/${id}/items?page=${page}&size=${size}`);
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.REQ_URL + 'stock/groups');
  }
}
