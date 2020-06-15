import { MenuItem } from './menu-item.model';

export class Order {

    tableNumber: number;
    orderItems: OrderItem[];
    orderItemId: number;
    orderId: number = 1;

    constructor() {
        this.reset();
        if(localStorage.getItem("tableNumber") == null){
            this.tableNumber = Math.round(Math.random() * 9) + 1;       // Just a random table number.
            localStorage.setItem("tableNumber", this.tableNumber.toString());
        }
    }

    addMenuItem(menuItem: MenuItem) {
        const existingMenuItem = this.orderItems.find(oi => oi.menuItem.id == menuItem.id);
        existingMenuItem == undefined ?
            this.orderItems.push(new OrderItem(this.orderItemId++, menuItem)) :
            existingMenuItem.amount++;
    }

    removeMenuItem(id: number) {
        const index = this.orderItems.findIndex(oi => oi.id == id);
        const orderItemToRemove = this.orderItems[index];
        orderItemToRemove.amount > 1 ?
            orderItemToRemove.amount-- :
            this.orderItems.splice(index, 1);
    }

    reset() {
        // for (const oi of this.orderItems) {
        //     localStorage.setItem(`${oi.menuItem.id}`, "0");
        // }
        this.orderItems = [];
        this.orderItemId = 1;
    }

    mapOrderForKitchen(){
        return {
            tableNumber: this.tableNumber,
            orderTime: new Date().toLocaleTimeString("nl"),
            orderedItems: this.orderItems.map(oi => {return {name: oi.menuItem.name, amount: oi.amount}}),
            orderId: this.orderId++
        }
    }
}

class OrderItem {
    id: number;
    menuItem: MenuItem;
    amount: number;

    constructor(id: number, menuItem: MenuItem) {
        this.id = id;
        this.menuItem = menuItem;
        this.amount = 1;
    }
}