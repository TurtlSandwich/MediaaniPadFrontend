import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'MediaanAngularIPad';

  public showOrder = false;

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.clear();
    this.goToCategories();
  }

  goToCategories() {
    this.showOrder = false;
    this.router.navigate(["categories"]);
  }

  goToOrder() {
    this.showOrder = true;
  }

}
