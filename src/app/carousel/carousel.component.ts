import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  cars
  constructor(private http: HttpClient) { 
    this.http.get('api/cars').subscribe((res) => {
      console.log(res)
      this.cars = res
    })
  }

  ngOnInit() {
  }

}
