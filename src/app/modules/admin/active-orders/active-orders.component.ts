import {Component, OnInit} from '@angular/core';
import {AdminService} from '../service/admin.service';
import {Order} from '../../../shared/models/order/order';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {DatePipe} from '@angular/common';
import {ArrayType} from '@angular/compiler';

@Component({
  selector: 'app-active-orders',
  templateUrl: './active-orders.component.html',
  styleUrls: ['./active-orders.component.css'],
  providers: [DatePipe]
})
export class ActiveOrdersComponent implements OnInit {
  searchForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')])
  });
  faCalendar = faCalendarAlt;
  date: {year: string, month: string, day: string};
  orderStatus: string;
  statusSelectIndex: number;

  activeOrders: Order[];
  order: Order;

  constructor(private adminService: AdminService,
              private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.statusSelectIndex = 0;
    this.adminService.getActiveOrders('', '').subscribe(data => this.activeOrders = data);
  }

  onSubmit() {
    this.resetFields();
    this.activeOrders = null;
    this.adminService.getActiveOrderById(this.searchForm.getRawValue().id).subscribe(data => this.order = data);
  }

  onDateSelect(event: any) {
    const parsedDate = this.datePipe.transform(`${this.date.year}-${this.date.month}-${this.date.day}`, 'yyy-MM-dd HH:mm');
    if (this.orderStatus) {
      this.adminService.getActiveOrders(parsedDate, this.orderStatus).subscribe(data => this.activeOrders = data);
    } else {
      this.adminService.getActiveOrders(parsedDate, '').subscribe(data => this.activeOrders = data);
    }
  }

  onStatusChange(event: any) {
    if (event.target.value === 'PENDING') {
      this.statusSelectIndex = 1;
      this.orderStatus = 'PENDING';
    } else {
      this.statusSelectIndex = 2;
      this.orderStatus = 'PROCESSING';
    }
    if (this.date) {
      const parsedDate = this.datePipe.transform(`${this.date.year}-${this.date.month}-${this.date.day}`, 'yyy-MM-dd HH:mm');
      this.adminService.getActiveOrders(parsedDate, this.orderStatus).subscribe(data => this.activeOrders = data);
    } else {
      this.adminService.getActiveOrders('', this.orderStatus).subscribe(data => this.activeOrders = data);
    }
  }
  clearFilters() {
    this.resetFields();
    this.order = null;
    this.searchForm.controls.id.patchValue('');
    this.adminService.getActiveOrders('', '').subscribe(data => this.activeOrders = data);
  }

  resetFields() {
    this.statusSelectIndex = 0;
    this.orderStatus = '';
    this.date = null;
  }

}
