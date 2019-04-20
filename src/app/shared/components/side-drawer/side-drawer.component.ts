import {
  Component,
  ViewChild,
  OnInit,
  OnDestroy
} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SideDrawerService, SideDrawerData } from './side-drawer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'yc-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.scss']
})
export class SideDrawerComponent implements OnInit, OnDestroy {
  private drawerSubscription: Subscription;

  @ViewChild('sidenav')
  sidenav: MatSidenav;

  constructor(
    private sideDrawerService: SideDrawerService
  ) {}

  ngOnInit() {
    this.drawerSubscription = this.sideDrawerService.drawer$.subscribe((data: SideDrawerData) => {
      if (data.toggled) {
        this.sidenav.toggle();
      }
    });
  }

  ngOnDestroy() {
    this.drawerSubscription.unsubscribe();
  }
}
