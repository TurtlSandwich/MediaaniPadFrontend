import { Meal } from './../models/meal';
import { Component, OnInit } from "@angular/core";
import { Order } from "../models/order";
import { OrderService } from "../services/order.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
})
export class OrderComponent implements OnInit {
  title: "Orders";
  mockOrders$: Order[];
  orders: Order[];

  constructor(private orderService: OrderService) {
    this.orders = [];
  }

  ngOnInit() {    
    this.orderService.somethingMessage$.subscribe((data: any) => this.updateOrders(data));
  }

  updateOrders(order){
    order = JSON.parse(order);
    console.log(order);
    this.orders.push(new Order(order.tableNumber, order.meals.map(dish => new Meal(dish.name, dish.amount))));
  }
}
