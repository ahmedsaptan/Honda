import { Component, isDevMode } from '@angular/core';
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
    let url = ''
    if (isDevMode) {
      url = "http://localhost:3000/api/cars"
    } else {
      url = 'api/cars'
    }
    http.get(url).subscribe((res) => {
      console.log(res)
      this.cars = res
    })


  }

}
