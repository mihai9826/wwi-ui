import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActiveOrdersComponent} from './active-orders/active-orders.component';
import {DispatchedOrdersComponent} from './dispatched-orders/dispatched-orders.component';
import {AdminOrderDetailsComponent} from './admin-order-details/admin-order-details.component';
import {EditProductComponent} from './edit-product/edit-product.component';

const routes: Routes = [
  {
    path: 'active-orders',
    component: ActiveOrdersComponent
  },
  {
    path: 'dispatched-orders',
    component: DispatchedOrdersComponent
  },
  {
    path: 'orders/:id',
    component: AdminOrderDetailsComponent
  },
  {
    path: 'product/:id',
    component: EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
