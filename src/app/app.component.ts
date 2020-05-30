import { MenuItem } from './models/menu-item.model';
import { MenuItemService } from './service/menu-item.service';
import { Component, OnInit } from '@angular/core';
import { Order } from './models/order.model';
import { WebSocketAPI } from './WebSocketAPI';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'MediaanAngularIPad';

  // For demo ----------------------------------
  public menuItems: MenuItem[] = [];
  // -------------------------------------------

  public order: Order;

  private ws: WebSocketAPI;

  constructor(private menuItemService: MenuItemService) { }

  ngOnInit() {
    this.ws = new WebSocketAPI();
    // this.ws._connect();
    this.order = new Order();

    // For demo
    this.loadMenu();
  }

  // For demo ----------------------------------------------------------------------

  loadMenu() {
    this.menuItemService.getAllMenuItems().subscribe((response: any[]) => {
      this.menuItems = response.map(menuItem => new MenuItem(menuItem));
    });
  }

  addDish(id: number) {
    const menuItemToAdd = this.menuItems.find(mi => mi.id == id);
    this.order.addMenuItem(menuItemToAdd);
  }

  addRandomDishes() {
    var randomAmountOfDishes = Math.round(Math.random() * 3) + 2;
    for (let i = 0; i < randomAmountOfDishes; i++) {
      this.addDish(Math.round(Math.random() * 4) + 1);
    }
  }

  removeDish(id: number) {
    this.order.removeMenuItem(id);
  }

  sendOrder() {
    this.ws._send(this.order.mapOrderForKitchen());
    this.order.reset();
  }

  // -------------------------------------------------------------------------------

}
