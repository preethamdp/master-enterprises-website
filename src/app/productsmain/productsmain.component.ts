import { Component, OnInit } from '@angular/core';
import {data} from './../whyUsinterface';
import {DataserviceService} from './../dataservice.service'

@Component({
  selector: 'app-productsmain',
  templateUrl: './productsmain.component.html',
  styleUrls: ['./productsmain.component.css']
})
export class ProductsmainComponent implements OnInit {
  alldata:data[]
  constructor(private dataservice:DataserviceService) { }

  ngOnInit(): void {
    this.alldata = this.dataservice.getAlldata()
    
  }

}
