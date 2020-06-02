import { MenuItem } from './_models/menu-item.model';
import { OrderService } from './_service/order.service';
import { MenuItemService } from './_service/menu-item.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from './_models/order.model';
import { WebSocketAPI } from './WebSocketAPI';
import { Router } from '@angular/router';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'MediaanAngularIPad';

  public showOrder = false;

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.clear();
    this.goToCategories();
  }

  goToCategories() {
    this.showOrder = false;
    this.router.navigate(["categories"]);
  }

  goToOrder() {
    this.showOrder = true;
  }

  // For demo ----------------------------------------------------------------------

  // public menuItems: MenuItem[] = [];

  // constructor(private menuItemService: MenuItemService) { }

  // ngOnInit() {
  //   this.loadMenu();
  // }

  // loadMenu() {
  //   this.menuItemService.getAllMenuItems().subscribe((response: any[]) => {
  //     this.menuItems = response.map(menuItem => new MenuItem(menuItem));
  //   });
  // }

  // addDish(id: number) {
  //   const menuItemToAdd = this.menuItems.find(mi => mi.id == id);
  //   this.order.addMenuItem(menuItemToAdd);
  // }

  // addRandomDishes() {
  //   var randomAmountOfDishes = Math.round(Math.random() * 3) + 2;
  //   for (let i = 0; i < randomAmountOfDishes; i++) {
  //     this.addDish(Math.round(Math.random() * 4) + 1);
  //   }
  // }

  // removeDish(id: number) {
  //   this.order.removeMenuItem(id);
  // }

  // sendOrder() {
  //   this.ws._send(this.order.mapOrderForKitchen());
  //   this.order.reset();
  // }

  // -------------------------------------------------------------------------------



}
