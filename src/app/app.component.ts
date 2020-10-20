import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'master-enterprise';
  showNav = "transparent";
  onActivate(e, outlet){
    window.scroll(0,0);
  }
}
