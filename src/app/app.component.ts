import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  SideDrawerService,
  SideDrawerData
} from './shared/components/side-drawer/side-drawer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
