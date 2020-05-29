import { WebSocketAPI } from './../WebSocketAPI';
import { MenuService } from './menu.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  testPostUrl = "http://localhost:8080/ipad/addorder";


  sendOrder(ws: WebSocketAPI) {
    // const orderToSave = JSON.stringify(this.order.getDishes().map(orderItem => orderItem.getDish().getId()));
    let orderforKitchen = {
      tableNumber: this.order.getTableNumber(),
      orderTime: new Date().toLocaleTimeString("nl"),
      meals: this.order.getDishes().map(order => {
        const please = {
          name: order.getDish().getName(),
          amount: order.getAmount()
        };
        return please;
      })
    }
    let orderToSave = {
      sessions: 1,
      order_time: new Date().toLocaleTimeString("nl"),
      meals: this.order.getDishes().map(d => { return { id: d.getDish().getId() }; })
    }
    console.log(orderforKitchen);
    // this.saveOrder(JSON.stringify(orderToSave));
    // this.sendOrderToKitchen(ws, orderforKitchen);
    this.order.clearOrder();
  }

  private sendOrderToKitchen(ws: WebSocketAPI, orderforKitchen) { ws._send(orderforKitchen); }

  private saveOrder(orderToSave) {
    this.http.post(this.testPostUrl, orderToSave);
  }
}