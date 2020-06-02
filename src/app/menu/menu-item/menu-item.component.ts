import { Subscription } from 'rxjs';
import { OrderService } from './../../_service/order.service';
import { MenuItem } from '../../_models/menu-item.model';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

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
    this.amount = Number(localStorage.getItem(`${this.menuItem.id}`));
  }

  toggleOrderMenu() {
    this.clicked = !this.clicked;
  }

  plus() {
    this.amount++;
    localStorage.setItem(`${this.menuItem.id}`, this.amount.toString());
    this.orderService.changeOrder(this.menuItem, 1);
  }

  min() {
    if (this.amount > 0) {
      this.amount--;
      localStorage.setItem(`${this.menuItem.id}`, this.amount.toString());
      this.orderService.changeOrder(this.menuItem, -1);
    }
  }

}
