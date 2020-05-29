export class Category {
    private imageUrl: string;

    constructor(
        private id: number,
        private name: string,
    ) {
        this.imageUrl = `assets/category-${name.toLowerCase()}.png`;
    }

    getId() { return this.id; }
    getName() { return this.name; }
    getImageUrl() { return this.imageUrl; }
}