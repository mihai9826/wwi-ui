import { NgModule } from '@angular/core';
import { ActiveOrdersComponent } from './active-orders/active-orders.component';
import {CoreModule} from '../../core/core.module';
import {AdminRoutingModule} from './admin-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DispatchedOrdersComponent } from './dispatched-orders/dispatched-orders.component';
import { AdminOrderDetailsComponent } from './admin-order-details/admin-order-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { UserManagementComponent } from './user-management/user-management.component';



@NgModule({
  declarations: [ActiveOrdersComponent, DispatchedOrdersComponent,
    AdminOrderDetailsComponent, EditProductComponent, UserManagementComponent],
  imports: [
    CoreModule,
    NgbModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
