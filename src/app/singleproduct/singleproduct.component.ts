import { Component, OnInit,Input } from '@angular/core';
import { data } from './../whyUsinterface';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {
  @Input() productdata:data

  constructor() { }

  ngOnInit(): void {
  }

}
