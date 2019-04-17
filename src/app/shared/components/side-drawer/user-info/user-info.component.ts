import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'yc-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  @Input()
  user: any;
}
