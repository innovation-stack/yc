import {
  Component,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: 'yc-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input()
  item: any;

  @Output()
  toggleCategory: EventEmitter<number> = new EventEmitter<number>();

  onToggleCategory() {
    this.toggleCategory.emit(this.item.id);
  }
}
