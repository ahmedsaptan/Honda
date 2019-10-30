import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true
  models = true

  @Input() cars

  getDataFromCar(event) {
    console.log("from navbar =>", event)
    this.models = !this.models
  }

  constructor() { }

  ngOnInit() {
  }

}
