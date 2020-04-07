import { Component, OnInit, Input } from "@angular/core";
import { Order } from "src/app/models/order.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.componenet.html",
  styleUrls: ["./order-list.component.css"],
})
export class OrderListComponent implements OnInit {
  @Input() orders: Order[];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(){
      console.log('current orders are: ', this.orders)
  }
}
