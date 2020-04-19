import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Order } from "../models/order";
import { Meal } from "../models/meal";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  kaas = new Meal("Kaas", "Echt heel jong belegen, minderjarig zelfs", 2.5);
  boter = new Meal("Boter", "Heerlijk glad joh", 1.95);

  mockMealList: Meal[] = [this.kaas, this.boter];
  mockOrder = new Order('DKS-RR-EKS', 1, this.mockMealList);
  mockOrders: Order[] = [this.mockOrder];

  getOrdersUrl = "";
  deleteOrderUrl = "";

  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get<Order[]>(this.getOrdersUrl);
  }

  deleteOrder(order: Order) {
    return this.http.delete(this.deleteOrderUrl + "/" + order.id);
  }

  getMockOrders() {
    return this.mockOrders;
  }
}
