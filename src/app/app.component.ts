import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'MediaanAngularIPad';

  // Get variables
  getUrl = 'http://echo.jsontest.com/key/value/one/two';
  items = [];

  // Post variables
  postUrl = 'http://httpbin.org/post';
  postData = {
    testKey: "testValue"
  }
  postReturnValue;

  constructor(private http: HttpClient) {

    // Get method
    this.http.get(this.getUrl).toPromise().then(data => {
      console.log(data);

      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          this.items.push(data[key]);
        }
      }
    })

    // Post method
    this.http.post(this.postUrl, this.postData).toPromise().then((data:any) => {
      console.log(data);

      this.postReturnValue = JSON.stringify(data.json);
    })
  }
}
