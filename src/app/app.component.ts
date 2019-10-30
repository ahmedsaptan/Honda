import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    setTheme('bs4'); // or 'bs4'
  }

  cars = [
    {
      url: '../assets/accord.png',
      model: 'ACCORD',
      price: '$31,060'
    },
    {
      url: '../assets/civic.png',
      model: 'CIVIC',
      price: '$19,060'
    },
    {
      url: '../assets/Insight.png',
      model: 'INSIGHT',
      price: '$22,060'
    },
    {
      url: '../assets/Clarity Fuel Cell.png',
      model: 'CLARITY-FUEL-CELL',
      price: '$27,060'
    },
    {
      url: '../assets/Civic Si Sedan.png',
      model: 'CIVIC-SI-SEDAN',
      price: '$25,060'
    },
    {
      url: '../assets/Accord Hybrid.png',
      model: 'ACCORD-HYBRID',
      price: '$25,060'
    }

  ]
}
