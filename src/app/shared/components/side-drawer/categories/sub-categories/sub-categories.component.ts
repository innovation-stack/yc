import { Component, Input } from '@angular/core';

@Component({
  selector: 'yc-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent {
  @Input()
  items: any[];
}

