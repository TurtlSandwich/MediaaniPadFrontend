import { Dish } from './../models/dish.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  downloadMenu(): Dish[]{
    // Http stuff here...
    return null;
  }
}
