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
  orders$: Order[];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    // return this.orderService
    //   .getOrders()
    //   .subscribe((data) => (this.orders$ = data));

    console.log(this.mockOrders$)
    console.log(this.orderService.getMockOrders())
    return this.orderService.getMockOrders();
    
  }
}
