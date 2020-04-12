import { Dish } from './../models/dish.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  sendOrder(dishes: Dish[]){
    // Http stuff here...
  }
}
