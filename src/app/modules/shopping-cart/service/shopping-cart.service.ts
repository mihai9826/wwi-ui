import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateOrderRequest} from '../../../shared/models/order/create-order-request';
import {Product} from '../../../shared/models/product/product';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import {CreateOrderLineRequest} from '../../../shared/models/order/create-order-line-request';
import {User} from '../../../shared/models/auth/user';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';


const STORAGE_KEY = 'cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items: CreateOrderRequest;

  constructor(@Inject(LOCAL_STORAGE) private storageService: StorageService,
              private http: HttpClient) {
    this.items = new CreateOrderRequest();

    if (this.storageService.has(STORAGE_KEY)) {
     Object.assign(this.items, this.storageService.get(STORAGE_KEY));
     this.items.orderLines = this.items.orderLines.map(element => {
       const objInstance = new CreateOrderLineRequest();
       Object.assign(objInstance, element);
       return objInstance;
     });
    } else {
      this.storageService.set(STORAGE_KEY, this.items);
    }
  }

  getAllItems() {
    return this.items;
  }

  updateCart(items: CreateOrderRequest) {
    Object.assign(this.items, items);
    this.storageService.set(STORAGE_KEY, this.items);
  }

  // CTRL+ALT+SHIFT+J
  addToCart(product: Product) {
    this.items.addOrderLine(product);
    this.storageService.set(STORAGE_KEY, this.items);
  }

  createNewOrder(): Observable<void> {
    return this.http.post<void>(environment.apiBaseURL + '/client/orders', this.items);
  }

  setContactPerson(user: User) {
    this.items.contactPerson = user;
  }

  setDeliveryAddress(address: string) {
    this.items.deliveryAddress = address;
  }

  setComments(comments: string) {
    this.items.comments = comments;
  }
}
