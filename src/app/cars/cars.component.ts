import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  @Input() cars
  constructor() { }

  ngOnInit() {
  }

}


