import { Component, OnInit, Input, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  cars
  constructor(private http: HttpClient) {
    let url = ''
    if (isDevMode) {
      url = "http://localhost:3000/api/cars"
    } else {
      url = 'api/cars'
    }

    this.http.get(url).subscribe((res) => {
      console.log(res)
      this.cars = res
    })
  }

  ngOnInit() {
  }

}
