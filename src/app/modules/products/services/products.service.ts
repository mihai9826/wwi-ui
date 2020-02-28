import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product, ProductCategory} from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private REQ_URL = 'http://localhost:8080/warehouse/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.REQ_URL);
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.REQ_URL + '/stock/groups');
  }
}
