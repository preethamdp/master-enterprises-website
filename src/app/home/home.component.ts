import { Component, OnInit } from '@angular/core';
import { whyUsData } from './../whyUsList';
import { ImagesliderComponent } from './../imageslider/imageslider.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = whyUsData;
  constructor() { }

  ngOnInit(): void {
  }

}
