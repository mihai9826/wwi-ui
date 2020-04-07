import { Component, OnInit } from '@angular/core';
import {CreateOrderRequest} from '../../../shared/models/order/create-order-request';
import {ShoppingCartService} from '../service/shopping-cart.service';
import {faArrowRight, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-cart-quick-view',
  templateUrl: './shopping-cart-quick-view.component.html',
  styleUrls: ['./shopping-cart-quick-view.component.css']
})
export class ShoppingCartQuickViewComponent implements OnInit {
  items: CreateOrderRequest;
  faRemoveIcon = faTimesCircle;
  faArrowRight = faArrowRight;

  get getRouter() {
    return this.router;
  }

  constructor(private cartService: ShoppingCartService,
              private router: Router) { }
d
  ngOnInit() {
    this.items = this.cartService.getAllItems();
  }

  orderValue(): number {
    this.items.orderValue = this.items.orderLines.reduce((accumulator, currentValue) =>
      accumulator + currentValue.totalUnitPrice, 0);

    this.cartService.updateCart(this.items);

    return this.items.orderValue;
  }

  onDropDownChange(event: any, i: number) {
    this.items.orderLines = this.items.orderLines.map((element, index) => {
      if (index === i) {
        element.setQuantity(event.target.value);
      }
      return element;
    });
    this.cartService.updateCart(this.items);
  }

  onRemoveTogglePress(productIndex: number) {
    this.items.orderLines = this.items.orderLines.filter((element, index) => index !== productIndex);
    this.orderValue();
  }
}
