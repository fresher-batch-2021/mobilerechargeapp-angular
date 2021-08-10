import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sim=[
    {id:1,price:149,validity:"28days",description:"Unlimited calls and Messages + 1GB data/day"},
    {id:2,price:249,validity:"28days",description:"	Unlimited calls and Messages + 2GB data/day + hotstar membership"},
    {id:3,price:399,validity:"84days",description:"Unlimited calls and Messages + 1.5GB data/day"},
    {id:4,price:555,validity:"84days",description:"Unlimited calls and Messages + 2GB data/day + amazon, Hotstar membership"}
]
}
