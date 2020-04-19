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
    let orderToSend = JSON.stringify( {
      tableNumber: this.order.getTableNumber(),
      dishIds: this.order.getDishes().map(orderItem => orderItem.getDish().getId())     // Getting the dish ids from the order instead of the whole orderItem object.
    })

    this.http.post(this.testPostUrl, orderToSend).toPromise().then((data: any) => {
      console.log(data);
    });

    this.order.clearOrder();
  }
}
