import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface SideDrawerData {
  toggled: boolean
}

@Injectable()
export class SideDrawerService {
  private drawerSubject = new BehaviorSubject<SideDrawerData>({
    toggled: false
  });
  drawer$: Observable<any> = this.drawerSubject.asObservable();

  toggleDrawer() {
    this.drawerSubject.next({
      toggled: true
    });
  }
}
