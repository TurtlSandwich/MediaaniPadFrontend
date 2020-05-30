import { Category } from './../models/category.model';
import { MenuService } from './../service/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.scss']
})
export class MenuCategoriesComponent implements OnInit {

  public categories: Category[] = [];
  public menuItems: [];

  private selectedCategoryId: number;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.menuService.getCategories()
      .subscribe(response => this.categories = response.map(c =>
        new Category(c.id, c.name))
      );
  }

  onSelect(categoryId: number){
    this.selectedCategoryId = categoryId;
    this.menuService.getItems(categoryId).subscribe(response => {

    })
  }
}
