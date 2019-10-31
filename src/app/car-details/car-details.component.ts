import { Component, OnInit } from '@angular/core';
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
          // Hide loading indicator
          this.carName = this.route.snapshot.paramMap.get("name")
          console.log(this.carName)
          this.http.get(`api/cars/${this.carName}`).subscribe((res) => {
          this.car = res
          })
      }
    })
  }

  ngOnInit() {

  }
}
