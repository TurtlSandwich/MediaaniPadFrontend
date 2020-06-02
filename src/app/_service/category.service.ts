import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  public selectedCategoryId: number;

  private mockCategoryUrl = "http://localhost:8081/category/getcategories";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any>{
    return this.http.get(this.mockCategoryUrl);
  }
}
