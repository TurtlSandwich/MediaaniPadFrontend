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

  private mockMenu: Dish[] = [
    new Dish(1, "Dish one", 12.3, ""),
    new Dish(2, "Dish two", 12.3, ""),
    new Dish(3, "Dish three", 12.3, ""),
    new Dish(4, "Dish four", 12.3, ""),
    new Dish(5, "Dish five", 12.3, "")
  ]

  private menuToBe: Dish[] = [];

  constructor(private http: HttpClient) {
    this.menu = new Menu();
    this.setMenu();
  }

  testGetUrl = "http://localhost:8080/menu";

  setMenu() {
    this.http.get<Dish[]>(this.testGetUrl).toPromise().then((data: any) => {
      for (const dish of data) {
        this.menuToBe.push(new Dish(dish.id, dish.name, dish.price, dish.picture));
      }
    });
    
    this.menu.setDishes(this.menuToBe);
  }

  getMenu(): Dish[] { return this.menu.getDishes(); }

  getDish(id: number): Dish { return this.menu.getDishes().find(dish => dish.getId() == id); }
}
