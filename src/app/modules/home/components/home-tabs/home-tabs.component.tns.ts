import { Component } from '@angular/core';
import { TabViewItemDef } from 'nativescript-angular/directives/tab-view';

@Component({
  selector: 'yc-home-tabs',
  templateUrl: './home-tabs.component.html',
  styleUrls: ['./home-tabs.component.scss']
})
export class HomeTabsComponent {
  productsTabItem: TabViewItemDef = {
    title: 'Products',
    iconSource: 'res://products'
  };
  giftCardTabItem: TabViewItemDef = {
    title: 'Gift Cards',
    iconSource: 'res://gift_card'
  };
  offersTabItem: TabViewItemDef = {
    title: 'Offers',
    iconSource: 'res://offers'
  };
}
