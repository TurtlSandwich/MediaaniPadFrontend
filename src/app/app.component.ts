import { OrderService } from './service/order.service';
import { MenuService } from './service/menu.service';
import { Component } from '@angular/core';
import { Order } from './models/order.model';
import { Dish } from './models/dish.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'MediaanAngularIPad';

  menu: Dish[];
  order: Order;

  constructor(
    private menuService: MenuService,
    private orderService: OrderService) {
    this.menu = menuService.getMenu();
    this.UpdateOrder();
  }


  addDish(id: number) {
    this.orderService.addDish(id);
    this.UpdateOrder();
  }

  removeDish(id: number) {
    this.orderService.removeDish(id);
    this.UpdateOrder();
  }

  sendOrder() {
    this.orderService.sendOrder();
    this.UpdateOrder();
  }

  private UpdateOrder() { this.order = this.orderService.getOrder(); }
}
