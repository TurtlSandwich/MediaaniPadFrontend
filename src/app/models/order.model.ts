import { Dish } from './dish.model';

export class Order {

    private tableNumber: number;
    private orderItems: OrderItem[];
    private orderItemId: number = 0;

    constructor() {
        this.clearOrder();
    }

    getTableNumber() { return this.tableNumber; }

    getDishes() { return this.orderItems; }

    addDish(dish: Dish) { this.orderItems.push(new OrderItem(this.orderItemId++, dish)); }

    removeDish(id: number) { this.orderItems = this.orderItems.filter(orderItem => orderItem.getId() != id); }

    clearOrder() {
        this.orderItems = [];
        this.orderItemId = 1
        this.tableNumber = Math.round(Math.random() * 9) + 1;       // Just a random table number.
    }
}

class OrderItem {
    constructor(private id: number, private dish: Dish) { }

    getId(): number { return this.id; }

    getDish(): Dish { return this.dish; }

    toString() { return `${this.id}) ${this.dish.getName()}` }
}