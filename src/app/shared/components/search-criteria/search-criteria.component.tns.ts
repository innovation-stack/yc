import { Component } from '@angular/core';

@Component({
  selector: 'yc-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.scss']
})
export class SearchCriteriaComponent {
  expandFilter = false;

  toggleFilterContainer() {
    this.expandFilter = !this.expandFilter;
  }
}
