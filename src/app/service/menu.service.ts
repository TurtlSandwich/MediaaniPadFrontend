import { Menu } from './../models/menu.model';
import { Dish } from './../models/dish.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu: Menu;

  private mockMenu: Dish[] = [
    new Dish(1, "Dish one", 12.3, ""),
    new Dish(1, "Dish one", 12.3, ""),
    new Dish(2, "Dish two", 12.3, ""),
    new Dish(3, "Dish three", 12.3, ""),
    new Dish(4, "Dish four", 12.3, ""),
    new Dish(5, "Dish five", 12.3, "")
  ]

  constructor(private http: HttpClient) {
    this.setMenu();
  }

  testGetUrl = "http://localhost:8080/menu";

  private setMenu() {
    this.menu = new Menu();
    // Http stuff here...
    // this.http.get<Dish[]>(this.testGetUrl).subscribe(data => console.log(data));

    // Mock
    this.menu.setDishes(this.mockMenu);
  }

  getMenu(): Dish[] { return this.menu.getDishes(); }

  getDish(id: number): Dish { return this.menu.getDishes().find(dish => dish.getId() == id); }
}
