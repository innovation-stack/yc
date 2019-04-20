import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule,
  MAT_CHECKBOX_CLICK_ACTION
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '../core/core.module';
import { SideDrawerService } from './components/side-drawer/side-drawer.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideDrawerComponent } from './components/side-drawer/side-drawer.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { SubCategoriesComponent } from './components/categories/sub-categories/sub-categories.component';
import { SearchCriteriaComponent } from './components/search-criteria/search-criteria.component';
import { FiltersComponent } from './components/search-criteria/filters/filters.component';
import { ColorFilterComponent } from './components/search-criteria/filters/color-filter/color-filter.component';
import { BrandFilterComponent } from './components/search-criteria/filters/brand-filter/brand-filter.component';
import { PriceFilterComponent } from './components/search-criteria/filters/price-filter/price-filter.component';

const MATERIAL_MODULES = [
  FlexLayoutModule,
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule
];

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
    ...MATERIAL_MODULES,
    CoreModule
  ],
  exports: [
    ...MATERIAL_MODULES,
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
        SideDrawerService,
        {
          provide: MAT_CHECKBOX_CLICK_ACTION,
          useValue: 'check'
        }
      ]
    }
  }
}
