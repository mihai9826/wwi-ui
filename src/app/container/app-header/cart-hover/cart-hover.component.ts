import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CreateOrderRequest} from '../../../shared/models/order/create-order-request';
import {ShoppingCartService} from '../../../modules/shopping-cart/service/shopping-cart.service';

@Component({
  selector: 'app-cart-hover',
  templateUrl: './cart-hover.component.html',
  styleUrls: ['./cart-hover.component.css']
})
export class CartHoverComponent implements OnInit, OnChanges {
  @Input() display = false;
  items: CreateOrderRequest;
  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getAllItems();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('DISPLAY-------------' + this.display);
  }

}
