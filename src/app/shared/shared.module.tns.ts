import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { ifAndroidDirective } from './directives/if-android/if-android.directive';
import { ifIosDirective } from './directives/if-ios/if-ios.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { SideDrawerService } from './components/side-drawer/side-drawer.service';

@NgModule({
  declarations: [
    ifAndroidDirective,
    ifIosDirective,
    NavbarComponent,
    UserInfoComponent
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptUISideDrawerModule
  ],
  exports: [
    NativeScriptUISideDrawerModule,
    ifAndroidDirective,
    ifIosDirective,
    NavbarComponent,
    UserInfoComponent
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
