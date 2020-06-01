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

export class UserserviceService {

  constructor(private client: HttpClient, private router : Router) { }

  
  public register(email: string, name: string, password: string): Observable<void> {
      return this.client.post("http://localhost:8080/register", {
        email: email,
        name: name,
        password: password
      }, { headers: headers, observe: 'response' }).pipe(map(resp => {
        if (resp.ok) {
          this.router.navigate(['/login']);
        }
        else {
          throw throwError(resp);
        }
      }));
  }

  public login(email: string, password: string): Observable<HttpResponse<{token: string}>> {
      return this.client.post<{token:string}>("http://localhost:8080/login", {
        email: email,
        password: password
      }, { headers: headers, observe: 'response' }).pipe(map((resp: HttpResponse<{ token: string }>) => {
        if (resp.ok) {
          document.cookie = `token=${resp.body.token}`;
          setTimeout(() => this.router.navigate(['/login']), 60*60*2*1000)
        }
        else {
          throw throwError(resp);
        }
      return resp;
    }));
  }

  public getToken(): string {
    const value: string = "; " + document.cookie;
    const parts: string[] = value.split("; " + "token" + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}



}

