import { Component, OnInit } from '@angular/core';
import {Order} from '../../../shared/models/order/order';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../../client/service/client.service';
import {AdminService} from '../service/admin.service';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.css']
})
export class AdminOrderDetailsComponent implements OnInit {
  currentOrderId: string;
  orderOfId = new Order();

  constructor(private activatedRoute: ActivatedRoute,
              private adminService: AdminService) { }

  ngOnInit() {
    this.currentOrderId = this.activatedRoute.snapshot.paramMap.get('id');
    this.adminService.getClientOrderById(this.currentOrderId).subscribe(data => this.orderOfId = data);
  }

}
