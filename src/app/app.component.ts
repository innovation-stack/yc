import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SideDrawerService } from './shared/services/side-drawer/side-drawer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private drawerSubscription: Subscription;

  @ViewChild('sidenav')
  sidenav: MatSidenav;

  constructor(
    private sideDrawerService: SideDrawerService
  ) {}

  ngOnInit() {
    this.drawerSubscription = this.sideDrawerService.drawer$.subscribe((shouldToggle) => {
      if (shouldToggle) {
        this.sidenav.toggle();
      }
    });
  }

  ngOnDestroy() {
    this.drawerSubscription.unsubscribe();
  }
}
