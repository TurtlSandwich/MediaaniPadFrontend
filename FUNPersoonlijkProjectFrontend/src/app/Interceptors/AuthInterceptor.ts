import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserserviceService } from '../services/userservice.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:"root"
})
export class AuthInterceptor implements HttpInterceptor {

    constructor(private userService : UserserviceService, private router: Router) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler,): Observable<HttpEvent<any>> {
        const token : string = this.userService.getToken();
        if(token === null || token === undefined || token === "" ) {
            this.router.navigate(["/login"]);
            return next.handle(req);
        }
        const request = req.clone({headers: new HttpHeaders().set("AuthToken", token)});
        return next.handle(request);
    }
}
