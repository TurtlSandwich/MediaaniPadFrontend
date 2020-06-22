import { WebSocketAPI } from './../WebSocketAPI';
import { MenuItem } from './../_models/menu-item.model';
import { Order } from './../_models/order.model';
import { Subscription, Subject } from 'rxjs';
import { OrderService } from './../_service/order.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  public order: Order;
  public totalPrice: number = 0;

  private subscription: Subscription;
  private ws: WebSocketAPI;
  private sessionId: number = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.order = new Order();
    this.ws = new WebSocketAPI();
    this.ws._connect();

    this.subscription = this.orderService.onOrderChange().subscribe((change: { menuItem: MenuItem, amount: number }) => {
      if (change.amount == 1) {
        this.order.addMenuItem(change.menuItem);
        this.totalPrice += change.menuItem.price;
      } else {
        this.order.removeMenuItem(change.menuItem.id);
        this.totalPrice -= change.menuItem.price;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  sendOrder() {
    if (this.order.orderItems.length > 0) {
      this.ws._send(this.order.mapOrderForKitchen());
      if (localStorage.getItem("session") == "null" || localStorage.getItem("session") == null) {
        localStorage.setItem("session", String(++this.sessionId))
      }
      this.orderService.sendOrder(this.order);
      this.order.reset();
    }
  }

}