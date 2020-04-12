import { OrderService } from './service/order.service';
import { MenuService } from './service/menu.service';
import { Menu } from './models/menu.model';
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

  order = new Order(this.orderService);
  menu = new Menu(this.menuService);

  constructor(
    private menuService: MenuService,
    private orderService: OrderService) {
  }

  addDish(id: number) {
    this.order.addDish(this.menu.dishes.find(dish => dish.getId() == id));
  }

  removeDish(id: number) {
    this.order.removeDish(id);
  }

  sendOrder(){
    this.order.sendOrder();
  }
}
