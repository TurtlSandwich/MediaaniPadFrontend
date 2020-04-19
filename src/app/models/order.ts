import { Meal } from "./meal";

export class Order {
  constructor(public id: string, public tableNumber: number, public mealList: Meal[]) {}
}
