import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postpaid',
  templateUrl: './postpaid.component.html',
  styleUrls: ['./postpaid.component.css']
})
export class PostpaidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  providers=[
    {id:1, name: "Airtel"},
    {id:2, name:"Jio"},
    {id:3,name:"vodafone"},
    {id:4,name:"jio"}
     
    ]

}
