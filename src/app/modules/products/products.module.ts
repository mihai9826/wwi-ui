import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsViewComponent } from './products-view/products-view.component';
import { ProductComponent } from './products-view/product/product.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [ProductsViewComponent, ProductComponent],
  exports: [
    ProductsViewComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: []
})
export class ProductsModule { }
