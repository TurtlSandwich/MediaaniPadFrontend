import { Dish } from './dish.model';

export class Order {

    private orderItems: OrderItem[];

    constructor() { this.orderItems = []; }

    getDishes() { return this.orderItems; }

    addDish(dish: Dish) { this.orderItems.push(new OrderItem(this.orderItems.length, dish)); }

    removeDish(id: number) { this.orderItems = this.orderItems.filter(orderItem => orderItem.getId() != id); }
}

class OrderItem {
    constructor(private id: number, private dish: Dish) { }

    getId(): number { return this.id; }

    getDish(): Dish { return this.dish; }

    toString() { return `${this.id}) ${this.dish.getName()}` }
}