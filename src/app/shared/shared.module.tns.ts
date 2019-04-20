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
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { SubCategoriesComponent } from './components/categories/sub-categories/sub-categories.component';
import { SideDrawerService } from './components/side-drawer/side-drawer.service';

@NgModule({
  declarations: [
    ifAndroidDirective,
    ifIosDirective,
    NavbarComponent,
    UserInfoComponent,
    CategoriesComponent,
    CategoryComponent,
    SubCategoriesComponent
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
    UserInfoComponent,
    CategoriesComponent
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
