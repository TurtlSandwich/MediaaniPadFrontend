import { Category } from '../../_models/category.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  @Input() public category: Category;

  @Output() public select: EventEmitter<number> = new EventEmitter();

  constructor() { }

  selectCategory(id: number) {
    this.select.emit(id);
  }
}
