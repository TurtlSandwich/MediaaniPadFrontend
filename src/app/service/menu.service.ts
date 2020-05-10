import { Menu } from './../models/menu.model';
import { Dish } from './../models/dish.model';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements OnInit {

  private menu: Menu;

  private menuToBe: Dish[] = [];

  constructor(private http: HttpClient) {
    this.menu = new Menu();
    this.setMenu();
  }

  ngOnInit() {
  }

  // testGetUrl = "http://localhost:8087/menu";
  testGetUrl = "http://localhost:4200/assets/mockMenu.json";

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
