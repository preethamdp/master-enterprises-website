import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsmainComponent } from './productsmain/productsmain.component'
import { ProductdetailsComponent } from './productdetails/productdetails.component'

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'products',component:ProductsmainComponent},
  {path: 'productdetail',component:ProductsmainComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
