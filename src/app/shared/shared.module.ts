import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideDrawerService } from './components/side-drawer/side-drawer.service';
import { SideDrawerComponent } from './components/side-drawer/side-drawer.component';
import { UserInfoComponent } from './components/side-drawer/user-info/user-info.component';
import { CategoriesComponent } from './components/side-drawer/categories/categories.component';
import { CategoryComponent } from './components/side-drawer/categories/category/category.component';
import { SubCategoriesComponent } from './components/side-drawer/categories/sub-categories/sub-categories.component';
import { SearchCriteriaComponent } from './components/search-criteria/search-criteria.component';
import { FiltersComponent } from './components/search-criteria/filters/filters.component';
import { ColorFilterComponent } from './components/search-criteria/filters/color-filter/color-filter.component';
import { BrandFilterComponent } from './components/search-criteria/filters/brand-filter/brand-filter.component';
import { PriceFilterComponent } from './components/search-criteria/filters/price-filter/price-filter.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SideDrawerComponent,
    UserInfoComponent,
    CategoriesComponent,
    CategoryComponent,
    SubCategoriesComponent,
    SearchCriteriaComponent,
    FiltersComponent,
    ColorFilterComponent,
    BrandFilterComponent,
    PriceFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  exports: [
    NavbarComponent,
    SideDrawerComponent,
    SearchCriteriaComponent,
    FiltersComponent
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
