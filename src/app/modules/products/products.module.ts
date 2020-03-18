import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsViewComponent } from './products-view/products-view.component';
import { ProductComponent } from './products-view/product/product.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ProductCategoriesComponent } from './products-view/product-categories/product-categories.component';
import {CoreModule} from '../../core/core.module';
import {ProductsRoutingModule} from './products-routing.module';



@NgModule({
  declarations: [ProductsViewComponent, ProductComponent, ProductCategoriesComponent],
  exports: [
    ProductsViewComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ProductsRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: []
})
export class ProductsModule { }
