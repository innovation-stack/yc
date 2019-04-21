import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
import { ifAndroidDirective } from './directives/if-android/if-android.directive';
import { ifIosDirective } from './directives/if-ios/if-ios.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { SubCategoriesComponent } from './components/categories/sub-categories/sub-categories.component';
import { SearchCriteriaComponent } from './components/search-criteria/search-criteria.component.tns';
import { ColorFilterComponent } from './components/search-criteria/filters/color-filter/color-filter.component';
import { BrandFilterComponent } from './components/search-criteria/filters/brand-filter/brand-filter.component';
import { PriceFilterComponent } from './components/search-criteria/filters/price-filter/price-filter.component';
import { FiltersComponent } from './components/search-criteria/filters/filters.component';
import { SideDrawerService } from './components/side-drawer/side-drawer.service';

@NgModule({
  declarations: [
    ifAndroidDirective,
    ifIosDirective,
    NavbarComponent,
    UserInfoComponent,
    CategoriesComponent,
    CategoryComponent,
    SubCategoriesComponent,
    SearchCriteriaComponent,
    ColorFilterComponent,
    BrandFilterComponent,
    PriceFilterComponent,
    FiltersComponent
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptUISideDrawerModule,
    NativeScriptUIListViewModule
  ],
  exports: [
    NativeScriptUISideDrawerModule,
    NativeScriptUIListViewModule,
    ifAndroidDirective,
    ifIosDirective,
    NavbarComponent,
    UserInfoComponent,
    CategoriesComponent,
    SearchCriteriaComponent
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
