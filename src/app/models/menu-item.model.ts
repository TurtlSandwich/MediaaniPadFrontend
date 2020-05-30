export class MenuItem {
    id: number;
    categoryId: number;
    name: string;
    price: number;
    picture: string;

    constructor(menuItem) {
        this.id = menuItem.id;
        this.categoryId = menuItem.categoryId;
        this.name = menuItem.name;
        this.price = menuItem.price;
        this.picture = menuItem.picture;
    }
}