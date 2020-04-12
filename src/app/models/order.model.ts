import { Dish } from './dish.model';

export class Order{
    
    constructor(private dishes: Dish[]) {
        
    }

    addDish(dish: Dish){
        this.dishes.push(dish);
    }

    removeDish(id: Number){
        this.dishes = this.dishes.filter(dish => dish.getId() != id);
    }
}