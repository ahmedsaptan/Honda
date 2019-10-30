import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  carName = null
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.carName = this.route.snapshot.paramMap.get("name")

  }

}
