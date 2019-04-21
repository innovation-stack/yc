import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { SharedModule } from '../../shared/shared.module.tns';
import { HomeRoutingModule } from './home-routing.module.tns';
import { HomeComponent } from './pages/home/home.component';
import { HomeTabsComponent } from './components/home-tabs/home-tabs.component.tns';
import { ProductsComponent } from './components/products/products.component.tns';

@NgModule({
  declarations: [
    HomeComponent,
    HomeTabsComponent,
    ProductsComponent
  ],
  imports: [
    NativeScriptCommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
    HomeRoutingModule
  ]
})
export class HomeModule {

}
