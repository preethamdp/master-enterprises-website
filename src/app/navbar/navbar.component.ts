import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() 
  showBg : string;
  textColor :string;
  expandClass = "product-not-expand";
  expandProfileClass = "product-not-expand";
  expand2 = false;
  expandfirst = false;
  mobileMenu = "mobile-navbar-not-active";
  mobileExpand = false;
  menuIcon = "menuicon-active";
  crossIcon = "crossicon-notactive";
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
    if(this.showBg == "transparent"){
      this.textColor = "#fff";
    }
    else{
      this.textColor = '';
    }
  }

openDropdown(){
  this.expandClass = "product-expand";
  this.expandfirst = true;
  this.expand2= false;
}
closeDropdown(){
  this.expandClass = "product-not-expand";
  this.expandfirst= false;
  this.expand2= false;
}
openDropdownprofile(){
  this.expandProfileClass = "product-expand";
  this.expand2 = true;
  this.expandfirst = false;
}
closeDropdownprofile(){
  this.expandProfileClass = "product-not-expand";
  this.expand2= false;
  this.expandfirst= false;
}

gowhite(){
  this.showBg = "#fff";
  this.textColor = "#000";
}
gotransparent(){
  this.showBg = "transparent";
  this.textColor = "#fff";
}

setMobileMenu(){
  if(!this.mobileExpand){
  this.mobileMenu = "mobile-navbar-active"
  this.mobileExpand = true;
  this.menuIcon = "menuicon-notactive";
  this.crossIcon = "crossicon-active";
  }
  else{
    this.mobileMenu = "mobile-navbar-not-active"
    this.mobileExpand = false;
    this.menuIcon = "menuicon-active";
    this.crossIcon = "crossicon-notactive";
  
  }
}


}
