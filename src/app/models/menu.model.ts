import { MenuService } from './../service/menu.service';
import { Dish } from './dish.model';

export class Menu {

    dishes: Dish[];

    constructor(private service: MenuService) {
        this.setMenu();
    }

    setMenu() {
        // Actual
        // this.dishes = this.service.downloadMenu();

        // Temporary
        this.dishes = [];
        this.dishes.push(new Dish(1, "Dish one", 12.3, ""));
        this.dishes.push(new Dish(2, "Dish two", 12.3, ""));
        this.dishes.push(new Dish(3, "Dish three", 12.3, ""));
        this.dishes.push(new Dish(4, "Dish four", 12.3, ""));
        this.dishes.push(new Dish(5, "Dish five", 12.3, ""));
    }

    getMenu() { return this.dishes; }
}