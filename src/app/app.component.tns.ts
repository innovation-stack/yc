import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { Subscription } from 'rxjs';
import { SideDrawerService, SideDrawerData } from './shared/components/side-drawer/side-drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private drawerSubscription: Subscription;
  private sideDrawer: RadSideDrawer;

  @ViewChild(RadSideDrawerComponent)
  drawerComponent: RadSideDrawerComponent;

  constructor(
    private sideDrawerService: SideDrawerService
  ) { }

  ngOnInit() {
    this.drawerSubscription = this.sideDrawerService.drawer$.subscribe((data: SideDrawerData) => {
      if (data.toggled) {
        this.sideDrawer.toggleDrawerState();
      }
    });
  }

  ngAfterViewInit() {
    this.sideDrawer = this.drawerComponent.sideDrawer;
  }

  ngOnDestroy() {
    this.drawerSubscription.unsubscribe();
  }
}
