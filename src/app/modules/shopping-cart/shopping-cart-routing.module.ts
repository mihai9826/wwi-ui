import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingCartQuickViewComponent} from './shopping-cart-quick-view/shopping-cart-quick-view.component';

const routes: Routes = [
  {
    path: 'step-1',
    component: ShoppingCartQuickViewComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
