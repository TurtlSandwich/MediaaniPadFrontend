import { OrderService } from './../service/order.service';
import { Dish } from './dish.model';

export class Order {

    dishes: Dish[] = [];

    constructor(private service: OrderService) {

    }

    addDish(dish: Dish) {
        this.dishes.push(dish);
    }

    removeDish(id: Number) {
        this.dishes = this.dishes.filter(dish => dish.getId() != id);
    }

    sendOrder(){
        this.service.sendOrder(this.dishes);
        this.dishes = [];   // Clearing the array after sending it.
    }
}