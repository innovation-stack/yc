import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SideDrawerService {
  private drawerSubject = new BehaviorSubject<boolean>(false);
  drawer$: Observable<any> = this.drawerSubject.asObservable();

  toggleDrawer() {
    this.drawerSubject.next(true);
  }
}
