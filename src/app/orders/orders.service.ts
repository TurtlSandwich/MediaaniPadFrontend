import { EventEmitter } from "protractor";
import { Order } from "../models/order.model";
import { Product } from "../models/product.model";

export class OrderService {
  product1 = new Product("1", "Cheese", 3);
  product2 = new Product("2", "Fanta", 4);
  product3 = new Product("3", "Cola Zero", 4);
  private productsList: Product[] = [this.product1, this.product2];
  private productsList1: Product[] = [this.product2, this.product3];

  private orders: Order[] = [
    new Order("1", this.productsList, 1, new Date(Date.now())),
    new Order("2", this.productsList, 2, new Date(Date.now())),
    new Order("5", this.productsList1, 5, new Date(Date.now())),
  ];

  getOrders(): Order[] {
    return this.orders.slice();
  }
}
