import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../../../shared/models/order/order';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  requestURL: string;

  constructor(private http: HttpClient) {
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
}
