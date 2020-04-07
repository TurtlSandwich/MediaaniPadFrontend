import { Product } from './product.model';

export class Order {
  constructor(
    public id: string,
    public products: Product[],
    public table: number,
    public dateTime: Date
  ) {}
}
