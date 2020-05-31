import { MenuItem } from './_models/menu-item.model';
import { OrderService } from './_service/order.service';
import { MenuItemService } from './_service/menu-item.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from './_models/order.model';
import { WebSocketAPI } from './WebSocketAPI';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'MediaanAngularIPad';

  public order: Order;

  private ws: WebSocketAPI;
  private subscription: Subscription;

  constructor(
    private orderService: OrderService,
    private router: Router) {

    this.subscription = this.orderService.onOrderChange().subscribe((change: { menuItem: MenuItem, amount: number }) => {
      change.amount == 1 ?
      this.order.addMenuItem(change.menuItem):
      this.order.removeMenuItem(change.menuItem.id);

      console.log(this.order.orderItems);
    });
  }

  ngOnInit() {
    this.ws = new WebSocketAPI();
    // this.ws._connect();
    this.order = new Order();
    this.router.navigate(["categories"]);
  }

  goToCategories(){ 
    this.router.navigate(["categories"]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
  //   // this.ws._send(this.order.mapOrderForKitchen());
  //   this.order.reset();
  // }

  // -------------------------------------------------------------------------------



}
