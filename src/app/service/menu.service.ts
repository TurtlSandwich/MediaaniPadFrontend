import { Menu } from './../models/menu.model';
import { Dish } from './../models/dish.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu: Menu;

  private menuToBe: Dish[] = [];

  constructor(private http: HttpClient) {
    this.menu = new Menu();
    this.setMenu();
  }

  mockCategoryUrl = "http://localhost:4200/assets/mockCategories.json";
  mockMenuUrl = "http://localhost:4200/assets/mockMenu.json";
  menuUrl = "http://localhost:8080/menu"

  setMenu() {
    this.http.get<Dish[]>(this.mockMenuUrl).subscribe((data: any) => {
      for (const dish of data) {
        this.menuToBe.push(new Dish(dish.id, dish.categoryId, dish.name, dish.price));
      }
    });
    
    this.menu.setDishes(this.menuToBe);
  }

  getMenu(): Dish[] { return this.menu.getDishes(); }

  getDish(id: number): Dish { return this.menu.getDishes().find(dish => dish.getId() == id); }

  getCategories(): Observable<any>{
    return this.http.get(this.mockCategoryUrl);
  }

  getItems(categoryId: number): Observable<any>{
    return this.http.get(this.mockMenuUrl);
  }
}
