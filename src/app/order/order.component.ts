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

  private subject = new Subject<any>();
  private subscription: Subscription;
  private ws: WebSocketAPI;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.ws = new WebSocketAPI();
    this.ws._connect();

    this.subscription = this.orderService.onOrderChange().subscribe((change: { menuItem: MenuItem, amount: number }) => {
      change.amount == 1 ?
        this.order.addMenuItem(change.menuItem) :
        this.order.removeMenuItem(change.menuItem.id);
    });

    this.subscription = this.orderService.onSendOrder().subscribe(() => this.sendOrder());

    this.order = new Order();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  sendOrder() {
    this.ws._send(this.order.mapOrderForKitchen());
    this.order.reset();
  }

}