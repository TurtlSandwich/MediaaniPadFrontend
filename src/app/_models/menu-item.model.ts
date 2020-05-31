export class MenuItem {
    id: number;
    categoryId: number;
    name: string;
    price: number;
    image: string;

    constructor(menuItem) {
        this.id = menuItem.id;
        this.categoryId = menuItem.categoryId;
        this.name = menuItem.name;
        this.price = menuItem.price;
        this.image = menuItem.image;
    }
}