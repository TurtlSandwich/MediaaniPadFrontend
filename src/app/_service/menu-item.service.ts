import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private menuUrl = "http://localhost:8081/getmealsbycategory/";

  constructor(private http: HttpClient) { }

  getMenuItemsByCategoryId(categoryId: number): Observable<any>{
    return this.http.get(this.menuUrl + categoryId);
  }

  // getAllMenuItems(){
  //   return this.http.get(this.mockMenuUrl);
  // }
}
