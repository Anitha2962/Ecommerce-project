import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllproductComponent } from './pages/allproduct/allproduct.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { ViewpageComponent } from './pages/viewpage/viewpage.component';
import { CartpageComponent } from './pages/cartpage/cartpage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'allproduct',component:AllproductComponent},
  {path:'search/:searchTerm',component:AllproductComponent},
  {path:'signuppage',component:SignuppageComponent},
  {path:'viewpage/:id',component:ViewpageComponent},
  {path:'cartpage',component:CartpageComponent},
  {path:'registerpage',component:RegisterpageComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
  

  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
