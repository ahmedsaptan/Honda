import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  @Input() url
  @Input() model
  @Input() price
  @Output() sendToggleTOcars = new EventEmitter<Boolean>()

  onClickExplan(title) {
    console.log(title.innerText.toString().toLocaleLowerCase())
    this.sendToggleTOcars.emit(true)

  }
  constructor() { }

  ngOnInit() {
  }

}
