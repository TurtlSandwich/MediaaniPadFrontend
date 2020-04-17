import { MenuService } from './menu.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private order: Order;

  constructor(
    private http: HttpClient,
    private menuService: MenuService) {
    this.order = new Order();
  }

  getOrder() { return this.order; }

  addDish(id: number) {
    this.order.addDish(this.menuService.getDish(id));
  }

  removeDish(id: number) { this.order.removeDish(id); }

  testPostUrl = "http://httpbin.org/post";

  sendOrder() {
    // The list of order items. So an id and dish.
    const orderList = JSON.stringify(this.order.getDishes());

    // The list of the ordered dishes.
    const orderedDishesList = this.order.getDishes().map(orderItem => orderItem.getDish());

    console.log(orderList);
    console.log(orderedDishesList);

    this.http.post(this.testPostUrl, orderedDishesList).toPromise().then((data: any) => {
      console.log(data);
    });

    this.order.reset();
  }
}
