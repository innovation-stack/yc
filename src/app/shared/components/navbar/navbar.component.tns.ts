import { Component, Input } from '@angular/core';
import { isAndroid } from 'platform';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { SideDrawerService } from '../side-drawer/side-drawer.service';

declare const android: any;

@Component({
  selector: 'yc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input()
  title: string;

  @Input()
  showBackButton = true;

  constructor(
    private page: Page,
    private router: RouterExtensions,
    private sideDrawerService: SideDrawerService,
  ) { }

  get canGoBack() {
    return this.router.canGoBack() && this.showBackButton;
  }

  onGoBack() {
    this.router.backToPreviousPage();
  }

  toggleDrawer() {
    this.sideDrawerService.toggleDrawer();
  }

  onActionBarLoaded() {
    if (isAndroid) {
      const backButton = this.page.actionBar.nativeView.getNavigationIcon();
      if (backButton) {
        const backButtonColor = android.graphics.Color.parseColor('#000000');
        const graphicsMode = android.graphics.PorterDuff.Mode.SRC_ATOP;
        backButton.setColorFilter(backButtonColor, graphicsMode);
      }
    }
  }
}
