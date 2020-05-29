export class Dish {

    constructor(
        private id: number,
        private categoryId: number,
        private name: string,
        private price: number,
        private picture?: string
    ) {
    }

    getId() { return this.id; }
    getCategoryId() { return this.categoryId; }
    getName() { return this.name; }
    getPrice() { return this.price; }
    getPicture() { return this.picture; }

    toString() { return `${this.id}) ${this.name}`; }
}
