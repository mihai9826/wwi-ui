import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Order} from '../../../shared/models/order/order';
import {AdminService} from '../service/admin.service';
import {ToastrService} from 'ngx-toastr';
import {Page} from '../../../shared/models/product/product';

@Component({
  selector: 'app-dispatched-orders',
  templateUrl: './dispatched-orders.component.html',
  styleUrls: ['./dispatched-orders.component.css']
})
export class DispatchedOrdersComponent implements OnInit {
  get id() { return this.searchForm.get('id'); }

  searchForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')])
  });

  dispatchedOrders: Order[];
  itemsPerPage = 50;
  totalElements;
  page = 1;
  previousPage;

  displayList = true;

  dispatchedOrderOfId: Order;

  constructor(private adminService: AdminService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadData();
    }
  }

  loadData() {
    this.adminService.getDispatchedOrders(this.page - 1, this.itemsPerPage).subscribe(
      data => {
        this.dispatchedOrders = data.content;
        this.totalElements = data.totalElements;
        this.itemsPerPage = data.size;
      }
    );
  }

  itemsDropDownChange(event: any) {
    this.itemsPerPage = event.target.value;
    this.loadData();
  }

  onSubmit() {
    this.displayList = false;
    this.adminService.getDispatchedOrderOfId(this.searchForm.getRawValue().id).subscribe(data => this.dispatchedOrderOfId = data,
      error => this.toastr.error('Order not found', 'Error'));
  }

}
