import { Category } from './../../models/category.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnChanges {

  @Input() public category: Category;

  @Output() public select: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  selectCategory(id: number){
    this.select.emit(id);
  }
}
