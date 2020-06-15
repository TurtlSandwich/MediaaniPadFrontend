import { Category } from '../_models/category.model';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../_service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.scss']
})
export class MenuCategoriesComponent implements OnInit {

  public categories: Category[];

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories()
      .subscribe(response => this.categories = response.map(c =>
        new Category(c.id, c.name))
      );
  }

  onSelect(categoryId: number) {
    this.categoryService.selectedCategoryId = categoryId;
    this.router.navigate(["menu"]);
  }
}
