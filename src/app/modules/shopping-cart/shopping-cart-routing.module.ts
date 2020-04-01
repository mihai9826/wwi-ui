import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShoppingCartQuickViewComponent} from './shopping-cart-quick-view/shopping-cart-quick-view.component';
import {ShoppingCartConfirmComponent} from './shopping-cart-confirm/shopping-cart-confirm.component';
import {AuthGuard} from '../../shared/guard/auth.guard';

const routes: Routes = [
  {
    path: 'step-1',
    component: ShoppingCartQuickViewComponent
  },
  {
    path: 'step-2',
    canActivate: [AuthGuard],
    component: ShoppingCartConfirmComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
