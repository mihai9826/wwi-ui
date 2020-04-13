import { NgModule } from '@angular/core';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import {CoreModule} from '../../core/core.module';
import {ClientRoutingModule} from './client-routing.module';
import { ClientOrderDetailsComponent } from './client-order-details/client-order-details.component';



@NgModule({
  declarations: [MyOrdersComponent, ClientOrderDetailsComponent],
  imports: [
    CoreModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
