import { Component, OnInit } from '@angular/core';
import {ClientService} from '../service/client.service';
import {Order} from '../../../shared/models/order/order';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  theOrders: Order[];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClientOrders().subscribe(data => this.theOrders = data);
  }

}
