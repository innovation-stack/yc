import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule
];

@NgModule({
  imports: [
    ...MATERIAL_MODULES
  ],
  exports: [
    ...MATERIAL_MODULES
  ]
})
export class CoreModule { }
