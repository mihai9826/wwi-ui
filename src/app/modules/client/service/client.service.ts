import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../../../shared/models/order/order';
import {environment} from '../../../../environments/environment';
import {UserService} from '../../authentication/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient,
              private userService: UserService) { }

  getClientOrders(): Observable<Order[]> {
    const clientId = this.userService.getUserId();
    return this.http.get<Order[]>(environment.apiBaseURL + `/client/${clientId}/orders`);
  }

  getClientOrderById(id: string): Observable<Order> {
    return this.http.get<Order>(environment.apiBaseURL + `/client/orders/${id}`);
  }

}
