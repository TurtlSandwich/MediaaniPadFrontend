export class Dish {

    constructor(
        private id: number,
        private name: string,
        private price: number,
        private picture: string) {
    }

    getId() { return this.id; }
    getName() { return this.name; }
    getPrice() { return this.price; }
    getPicture() { return this.picture; }
}