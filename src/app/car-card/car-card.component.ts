import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  @Input() url
  @Input() model
  @Input() price

  onClickExplan(title) {
    console.log(title.innerText.toString().toLocaleLowerCase())
  }
  constructor() { }

  ngOnInit() {
  }

}
