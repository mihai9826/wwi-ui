import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import {CoreModule} from '../../core/core.module';
import {ClientRoutingModule} from './client-routing.module';



@NgModule({
  declarations: [MyOrdersComponent],
  imports: [
    CoreModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
