import { Order } from './../_models/order.model';
import { HttpClient } from '@angular/common/http';
import { WebSocketAPI } from './../WebSocketAPI';
import { MenuItem } from '../_models/menu-item.model';
import { Injectable } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderChangeSubject = new Subject<{ menuItem: MenuItem, amount: number }>();
  private sendOrderSubject = new Subject<any>();
  private getAmountsubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  changeOrder(menuItem: MenuItem, amount: number) {
    this.orderChangeSubject.next({ menuItem: menuItem, amount: amount });
  }

  onOrderChange(): Observable<any> {
    return this.orderChangeSubject.asObservable();
  }

  sendOrder(order: Order) {
    let body = {
      "sessions": 2,
      "order_time": Date.now().toLocaleString("nl").substring(0, 5),
      "meals": [order.orderItems.map(oi => {return { id: oi.menuItem.id }})]
    }
    // this.http.post("http://localhost:8081/ipad/addorder", body);
    this.sendOrderSubject.next();
  }

  onSendOrder(): Observable<any> {
    return this.sendOrderSubject.asObservable();
  }

  getAmount(id: number): number {
    return 0;
  }
}
