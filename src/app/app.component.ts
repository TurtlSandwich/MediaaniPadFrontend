import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { WebSocketAPI } from './websocket';
import { Order } from './models/order';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "MediaanAngularKitchen";
  webSocket: WebSocketAPI;
  greeting: any;
  order: Order;
  name: string;

  constructor() {}
  ngOnInit() {
    this.webSocket = new WebSocketAPI(new AppComponent());
    this.connect();
  }

  connect(){
    this.webSocket._connect();
  }

  disconnect(){
    this.webSocket._disconnect(); 
  }

  handleOrder(order){
    this.order = order;
  }

  handleMessage(message){
    this.greeting = message;
  }

}
