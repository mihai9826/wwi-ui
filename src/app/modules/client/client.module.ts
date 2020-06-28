import { NgModule } from '@angular/core';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import {CoreModule} from '../../core/core.module';
import {ClientRoutingModule} from './client-routing.module';
import { ClientOrderDetailsComponent } from './client-order-details/client-order-details.component';
import { AccountComponent } from './account/account.component';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [MyOrdersComponent, ClientOrderDetailsComponent, AccountComponent],
  imports: [
    CoreModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
