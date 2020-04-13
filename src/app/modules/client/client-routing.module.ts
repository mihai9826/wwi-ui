import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyOrdersComponent} from './my-orders/my-orders.component';
import {ClientOrderDetailsComponent} from './client-order-details/client-order-details.component';

const routes: Routes = [
  {
    path: 'orders',
    component: MyOrdersComponent
  },
  {
    path: 'orders/:id',
    component: ClientOrderDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
