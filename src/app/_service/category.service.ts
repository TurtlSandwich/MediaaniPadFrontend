import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  public selectedCategoryId: number;

  private mockCategoryUrl = "assets/mock-data/mock-categories.json";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any>{
    return this.http.get(this.mockCategoryUrl);
  }
}
