import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BaseLayoutComponent} from '../container/base-layout/base-layout.component';
import {AppHeaderComponent} from '../container/app-header/app-header.component';

const APP_CONTAINERS = [BaseLayoutComponent];

const APP_COMPONENTS = [AppHeaderComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    ...APP_CONTAINERS,
    ...APP_COMPONENTS
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CoreModule { }
