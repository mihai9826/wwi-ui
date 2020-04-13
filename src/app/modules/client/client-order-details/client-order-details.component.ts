import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../service/client.service';
import {Order} from '../../../shared/models/order/order';

@Component({
  selector: 'app-client-order-details',
  templateUrl: './client-order-details.component.html',
  styleUrls: ['./client-order-details.component.css']
})
export class ClientOrderDetailsComponent implements OnInit {
  currentOrderId: string;
  orderOfId = new Order();

  constructor(private activatedRoute: ActivatedRoute,
              private clientService: ClientService) { }

  ngOnInit() {
    this.currentOrderId = this.activatedRoute.snapshot.paramMap.get('id');
    this.clientService.getClientOrderById(this.currentOrderId).subscribe(data => this.orderOfId = data);
  }

}
