import { Order } from './../_models/order.model';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../_models/menu-item.model';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderChangeSubject = new Subject<{ menuItem: MenuItem, amount: number }>();
  private sendOrderSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  changeOrder(menuItem: MenuItem, amount: number) {
    this.orderChangeSubject.next({ menuItem: menuItem, amount: amount });
  }

  onOrderChange(): Observable<any> {
    return this.orderChangeSubject.asObservable();
  }

  sendOrder(order: Order) {
    let body = {
      "sessions": localStorage.getItem("session"),
      "order_time": new Date().toLocaleTimeString("nl"),
      "meals": order.orderItems.map(oi => {return { id: oi.menuItem.id }})
    }
    console.log(body);
    this.http.post("http://localhost:8081/ipad/addorder", body).subscribe(data => console.log(data));
    this.sendOrderSubject.next();
  }

  onSendOrder(): Observable<any> {
    return this.sendOrderSubject.asObservable();
  }
}
