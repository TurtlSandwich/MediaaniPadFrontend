import { Dish } from './dish.model';

export class Menu {

    private dishes: Dish[];

    constructor() {
    }

    setDishes(dishes: Dish[]) { this.dishes = dishes; }

    getDishes() { return this.dishes; }
}