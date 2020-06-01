import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../Services/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email : string;
  username: string;
  password: string;
  confirmPassword: string;

  constructor(private userService: UserserviceService, private router : Router) { }

  registerUser() : void {
    if(this.password === this.confirmPassword) {
      this.userService.register(this.email, this.username, this.password)
      .subscribe(response => {
        this.router.navigate(["/login"]);
      },
      error => console.log(error));
    }
  }
  
  ngOnInit() {
  }

}
