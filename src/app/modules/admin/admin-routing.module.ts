import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActiveOrdersComponent} from './active-orders/active-orders.component';
import {DispatchedOrdersComponent} from './dispatched-orders/dispatched-orders.component';

const routes: Routes = [
  {
    path: 'active-orders',
    component: ActiveOrdersComponent
  },
  {
    path: 'dispatched-orders',
    component: DispatchedOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
