import { WebSocketAPI } from './../WebSocketAPI';
import { MenuItem } from '../_models/menu-item.model';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderChangeSubject = new Subject<any>();
  private sendOrderSubject = new Subject<any>();

  constructor() {
  }

  changeOrder(menuItem: MenuItem, amount: number) {
    this.orderChangeSubject.next({ menuItem: menuItem, amount: amount });
  }

  onOrderChange(): Observable<any> {
    return this.orderChangeSubject.asObservable();
  }

  sendOrder() {
    this.sendOrderSubject.next();
  }

  onSendOrder(): Observable<any>{
    return this.sendOrderSubject.asObservable();
  }
}
