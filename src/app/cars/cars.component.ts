import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  @Input() cars
  @Output() sendDataToNavbar = new EventEmitter<Boolean>()

  getDataFromCardCar(event) {
    console.log('from cars => ', event)
    this.sendDataToNavbar.emit(event)
  }
  constructor() { }

  ngOnInit() {
  }

}


