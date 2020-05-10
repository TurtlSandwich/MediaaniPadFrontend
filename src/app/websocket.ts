import { AppComponent } from "./app.component";
import * as Stomp from "stompjs";
import * as SockJS from "sockjs-client";

export class WebSocketAPI {
  webSocketEndPoint: string = "http://localhost:8080/mediaan-ws";
  topic: string = "/topic/orders";
  stompClient: any;
  appComponent: AppComponent;

  constructor(appComponent: AppComponent) {
    this.appComponent = appComponent;
  }

  _connect() {
    console.log("trying to connect websocket");
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect(
      {},
      function (frame) {
        _this.stompClient.subscribe(_this.topic, function (sdkEvent) {
          _this.onOrderReceived(sdkEvent);
        });
      },
      this.errorCallBack
    );
  }

  _disconnect() {
    if (this.stompClient !== null) {
      this.stompClient._disconnect();
    }
  }

  errorCallBack(error) {
    console.log("error: " + error);
    setTimeout(() => {
      this._connect();
    }, 5000);
  }

  onOrderReceived(order) {
    console.log("Order received from server: " + order);
    this.appComponent.handleOrder(JSON.stringify(order.body));
  }

 
}
