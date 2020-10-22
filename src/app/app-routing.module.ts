import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsmainComponent } from './productsmain/productsmain.component'
import { ProductdetailsComponent } from './productdetails/productdetails.component'
import { ProductfromnavbarviewComponent } from './productfromnavbarview/productfromnavbarview.component'
import { ProfileComponent } from './profile/profile.component'
import { ContactComponent } from './contact/contact.component'


const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch: 'full'},
  {path: 'home',component:HomeComponent},
  {path: 'products',component:ProductsmainComponent},
  {path: 'productdetail/:data',component:ProductdetailsComponent},
  {path: 'productlist/:data',component:ProductfromnavbarviewComponent},
  {path: 'profile',component:ProfileComponent},
  {path: 'contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
