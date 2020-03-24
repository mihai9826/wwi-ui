import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {BaseLayoutComponent} from './container/base-layout/base-layout.component';

const routes: Routes = [
  {
    path: 'home',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/products/products.module').then(mod => mod.ProductsModule)
      }
    ]
  },
  {
    path: 'shopping-cart',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/shopping-cart/shopping-cart.module').then(mod => mod.ShoppingCartModule)
      }
    ]
  },
  {
    path: 'auth',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/authentication/authentication.module').then(mod => mod.AuthenticationModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
