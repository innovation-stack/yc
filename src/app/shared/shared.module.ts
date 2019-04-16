import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideDrawerService } from './components/side-drawer/side-drawer.service';
import { SideDrawerComponent } from './components/side-drawer/side-drawer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SideDrawerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  exports: [
    NavbarComponent,
    SideDrawerComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        SideDrawerService
      ]
    }
  }
}
