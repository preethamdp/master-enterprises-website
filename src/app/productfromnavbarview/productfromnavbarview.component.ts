import { Component, OnInit } from '@angular/core';
import {data} from './../whyUsinterface';
import {DataserviceService} from './../dataservice.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productfromnavbarview',
  templateUrl: './productfromnavbarview.component.html',
  styleUrls: ['./productfromnavbarview.component.css']
})
export class ProductfromnavbarviewComponent implements OnInit {
  alldata:data[]
  reqdata:data[]
  param1:string;
  constructor(private _Activatedroute:ActivatedRoute,private dataservice:DataserviceService) { }

  ngOnInit(): void {
    this.alldata = this.dataservice.getAlldata()
    this._Activatedroute.paramMap.subscribe(params => { 
      this.param1 = params.get('data'); 
  });
  console.log(this.param1)
   //code goes here

  }
  }


