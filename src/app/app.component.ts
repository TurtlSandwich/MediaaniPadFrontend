import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "MediaanAngularKitchen";

 
  constructor() {}
  ngOnInit() {}

  // ngOnInit() {
  //   return this.userService
  //     .getUsers()
  //     .subscribe((data) => this.users$ = data);
  // }

  // geturl = "http://echo.jsontest.com/key/value/one/two";
  // posturl = "http://httpbin.org/post";
  // items = [];
  // json;
  // postdata = {
  //   voeding: "kaas",
  // };

  // constructor(private http: HttpClient) {
  //   // This is the GET call from a test url
  //   this.http
  //     .get(this.geturl)
  //     .toPromise()
  //     .then((data) => {
  //       console.log(data);

  //       for (let key in data)
  //         if (data.hasOwnProperty(key)) this.items.push(data[key]);
  //     });

  //   // This is the POST call from a test url
  //   this.http
  //     .post(this.posturl, this.postdata)
  //     .toPromise()
  //     .then((data: any) => {
  //       console.log(data);
  //       console.log(data.json.voeding);
  //       // JSON.stringyfy makes the JSON data readable
  //       this.json = JSON.stringify(data.json);
  //     });
  // }
}
