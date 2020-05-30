import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private mockCategoryUrl = "http://localhost:4200/assets/mockCategories.json";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any>{
    return this.http.get(this.mockCategoryUrl);
  }
}
