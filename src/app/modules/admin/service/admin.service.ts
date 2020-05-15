import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../../../shared/models/order/order';
import {environment} from '../../../../environments/environment';
import {Page} from '../../../shared/models/product/product';
import {AdminProductDTO} from '../../../shared/models/product/admin-product-dto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  requestURL: string;

  constructor(private http: HttpClient) {
  }

  getProductById(id: string): Observable<AdminProductDTO> {
    return this.http.get<AdminProductDTO>(environment.apiBaseURL + `/warehouse/admin/stock/item/${id}`);
  }

  updateProduct(id: string, updatedProduct: AdminProductDTO): Observable<AdminProductDTO> {
    return this.http.put<AdminProductDTO>(environment.apiBaseURL + `/warehouse/admin/stock/item/${id}`, updatedProduct);
  }

  getActiveOrders(date: string, status: string): Observable<Order[]> {
    if (date && status) {
      this.requestURL = environment.apiBaseURL + `/admin/orders/pending-processing?date=${date}&status=${status}`;
      return this.http.get<Order[]>(this.requestURL);
    }
    if (date) {
      this.requestURL = environment.apiBaseURL + `/admin/orders/pending-processing?date=${date}`;
      return this.http.get<Order[]>(this.requestURL);
    }
    if (status) {
      this.requestURL = environment.apiBaseURL + `/admin/orders/pending-processing?status=${status}`;
      return this.http.get<Order[]>(this.requestURL);
    }
    return this.http.get<Order[]>(environment.apiBaseURL + '/admin/orders/pending-processing');
  }

  getActiveOrderById(orderId: number): Observable<Order> {
    return this.http.get<Order>(environment.apiBaseURL + `/admin/orders/${orderId}/pending-processing`);
  }

  getDispatchedOrders(page: number, size: number): Observable<Page<Order>> {
    return this.http.get<Page<Order>>(environment.apiBaseURL + `/admin/orders/dispatched?page=${page}&size=${size}`);
  }

  getDispatchedOrderOfId(id: number): Observable<Order> {
    return this.http.get<Order>(environment.apiBaseURL + `/admin/orders/${id}/dispatched`);
  }

  setOrderStatusPending(id: number): Observable<Order> {
    return this.http.put<Order>(environment.apiBaseURL + `/admin/orders/${id}/pending`, null);
  }

  setOrderStatusProcessing(id: number): Observable<Order> {
    return this.http.put<Order>(environment.apiBaseURL + `/admin/orders/${id}/processing`, null);
  }

  setOrderStatusDispatched(id: number): Observable<Order> {
    return this.http.put<Order>(environment.apiBaseURL + `/admin/orders/${id}/dispatched`, null);
  }

  getClientOrderById(currentOrderId: string): Observable<Order> {
    return this.http.get<Order>(environment.apiBaseURL + `/admin/orders/${currentOrderId}`);
  }
}
