import { Component } from '@angular/core';
import { SideDrawerService } from '../../services/side-drawer/side-drawer.service';

@Component({
  selector: 'yc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private sideDrawerService: SideDrawerService
  ) {}

  toggleDrawer() {
    this.sideDrawerService.toggleDrawer();
  }
}
