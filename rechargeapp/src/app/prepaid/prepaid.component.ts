import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prepaid',
  templateUrl: './prepaid.component.html',
  styleUrls: ['./prepaid.component.css']
})
export class PrepaidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  providers=[
{id:1, name: "Airtel"},
{id:2, name:"Jio"},
{id:3,name:"vodafone"},
{id:4,name:"jio"}
 
]
content=[{id:1,price:"RS149"},
{id:2,price:"RS249"},
{id:3,price:"RS399"},
{id:4,price:"RS555"}

]
}

    



