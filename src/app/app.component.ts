import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars = null
  constructor(private http: HttpClient) {
    setTheme('bs4'); // or 'bs4'
    http.get('api/cars').subscribe((res) => {
      console.log(res)
      this.cars = res
    })

  
  }

}
