import { Subscription } from 'rxjs';
import { OrderService } from './../../_service/order.service';
import { MenuItem } from '../../_models/menu-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() public menuItem: MenuItem;

  public amount: number;
  public clicked = false;
  private subscription: Subscription;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    console.log(this.menuItem);
    this.amount = Number(localStorage.getItem(`${this.menuItem.id}`));
    this.subscription = this.orderService.onSendOrder().subscribe(() => this.amount = 0);
  }

  toggleOrderMenu() {
    this.clicked = !this.clicked;
  }

  plus() {
    this.amount++;
    this.orderService.changeOrder(this.menuItem, 1);
  }

  min() {
    if (this.amount > 0) {
      this.amount--;
      this.orderService.changeOrder(this.menuItem, -1);
    }
  }

}
