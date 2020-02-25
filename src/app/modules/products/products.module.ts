import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './products-list/product/product.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ProductsListComponent, ProductComponent],
  exports: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  providers: []
})
export class ProductsModule { }
