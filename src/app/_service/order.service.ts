import { MenuItem } from '../_models/menu-item.model';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private subject = new Subject<any>();

  constructor() { }

  changeOrder(menuItem: MenuItem, amount: number){
    this.subject.next({menuItem: menuItem, amount: amount});
  }

  onOrderChange(): Observable<any>{
    return this.subject.asObservable();
  }
}
