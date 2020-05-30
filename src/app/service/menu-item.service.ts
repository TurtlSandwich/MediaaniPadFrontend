import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private mockMenuUrl = "http://localhost:4200/assets/mockMenu.json";

  constructor(private http: HttpClient) { }

  getMenuItemsByCategoryId(categoryId: number): Observable<any>{
    return this.http.get(this.mockMenuUrl);
  }

  getAllMenuItems(){
    return this.http.get(this.mockMenuUrl);
  }
}
