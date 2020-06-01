import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../Services/userservice.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private userService: UserserviceService, private router: Router) { }

  loginUser() {
    this.userService.login(this.email, this.password)
      .subscribe(resp => {
        this.router.navigate(["/login"]);
      },
      error => console.log(error));
  }

  ngOnInit() {
  }

}
