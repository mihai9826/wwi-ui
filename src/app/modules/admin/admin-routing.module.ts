import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActiveOrdersComponent} from './active-orders/active-orders.component';

const routes: Routes = [
  {
    path: 'active-orders',
    component: ActiveOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
