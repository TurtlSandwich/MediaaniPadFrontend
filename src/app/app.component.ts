import { OrderService } from './service/order.service';
import { MenuService } from './service/menu.service';
import { Component, OnInit } from '@angular/core';
import { Order } from './models/order.model';
import { Dish } from './models/dish.model';
import { WebSocketAPI } from './WebSocketAPI';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'MediaanAngularIPad';

  menu: Dish[];
  order: Order;

  webSocketAPI: WebSocketAPI;

  constructor(
    private menuService: MenuService,
    private orderService: OrderService) {
  }

  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI(new AppComponent(this.menuService, this.orderService));
    // this.webSocketAPI._connect();

    this.order = new Order();
    this.menu = this.menuService.getMenu();
  }

  addDish(id: number) {
    this.orderService.addDish(id);
    this.UpdateOrder();
  }

  addRandomDishes() {
    var amountOfDishes = Math.round(Math.random() * 3) + 2;
    for (let i = 0; i < amountOfDishes; i++) {
      this.addDish(Math.round(Math.random() * 4) + 1);
    }
  }

  removeDish(id: number) {
    this.orderService.removeDish(id);
    this.UpdateOrder();
  }

  sendOrder() {
    this.orderService.sendOrder(this.webSocketAPI);
    this.UpdateOrder();
  }

  private UpdateOrder() { this.order = this.orderService.getOrder(); }

  // Websocket stuff ------------------------------------------------------------------------------------------

}
