import { Component, OnInit, isDevMode } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  carName = null
  car = null

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        console.log("car detail")

        this.carName = this.route.snapshot.paramMap.get("name")
        let url = ''
        if (isDevMode) {
          url = `http://localhost:3000/api/cars/${this.carName}`
        } else {
          url = `api/cars/${this.carName}`
        }
        console.log(this.carName)
        this.http.get(url).subscribe((res) => {
          this.car = res
        })
      }
    })
  }

  ngOnInit() {

  }
}
