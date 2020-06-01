import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const headers = new HttpHeaders()
.set("Content-Type", "application/json")
.set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  constructor(private client: HttpClient, private router : Router) { }

  public addProject(name: string, description: string): Observable<void> {
    return this.client.post("http://localhost:8080/newproject", {
      name: name,
      description: description
    }, { headers: headers, observe: 'response' }).pipe(map(resp => {
      if (resp.ok) {
        this.router.navigate(['/overview']);
      }
      else {
        throw throwError(resp);
      }
    }));
}

}
