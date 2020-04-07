import { Component, OnInit } from "@angular/core";
import { Order } from "../models/order.model";
import { OrderService } from "./orders.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private ordersService: OrderService) {}

  ngOnInit() {
    this.orders = this.ordersService.getOrders();
  }
}
