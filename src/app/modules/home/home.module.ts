import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../../../app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
    HomeRoutingModule
  ]
})
export class HomeModule {

}
