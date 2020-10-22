import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import { FooterComponent } from './footer/footer.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { ProductsmainComponent } from './productsmain/productsmain.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductfromnavbarviewComponent } from './productfromnavbarview/productfromnavbarview.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ImagesliderComponent,
    FooterComponent,
    SingleproductComponent,
    ProductsmainComponent,
    ProductdetailsComponent,
    ProductfromnavbarviewComponent,
    ProfileComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
