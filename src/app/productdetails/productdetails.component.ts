import { Component, OnInit } from '@angular/core';
import {data} from './../whyUsinterface';
import {DataserviceService} from './../dataservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  param1:string;
  productdata:data;
  constructor(private dataservice:DataserviceService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.param1 = params.get('data'); 
      console.log(this.param1)
  });
  console.log(this.param1)
    this.productdata = this.dataservice.getSpecificdata(this.param1);
    console.log(this.param1)

  }

}
