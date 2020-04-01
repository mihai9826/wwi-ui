import { NgModule } from '@angular/core';
import {CoreModule} from '../../core/core.module';
import {ShoppingCartRoutingModule} from './shopping-cart-routing.module';
import { ShoppingCartQuickViewComponent } from './shopping-cart-quick-view/shopping-cart-quick-view.component';
import { ShoppingCartConfirmComponent } from './shopping-cart-confirm/shopping-cart-confirm.component';



@NgModule({
  declarations: [ShoppingCartQuickViewComponent, ShoppingCartConfirmComponent],
  imports: [
    CoreModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
