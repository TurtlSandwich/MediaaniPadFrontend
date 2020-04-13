import { Dish } from './dish.model';

export class Order {

    private orderItems: OrderItem[];
    private orderItemId: number = 0;

    constructor() {
        this.reset();
    }

    getDishes() { return this.orderItems; }

    addDish(dish: Dish) { this.orderItems.push(new OrderItem(this.orderItemId++, dish)); }

    removeDish(id: number) { this.orderItems = this.orderItems.filter(orderItem => orderItem.getId() != id); }

    reset() {
        this.orderItems = [];
        this.orderItemId = 0
    }
}

class OrderItem {
    constructor(private id: number, private dish: Dish) { }

    getId(): number { return this.id; }

    getDish(): Dish { return this.dish; }

    toString() { return `${this.id}) ${this.dish.getName()}` }
}