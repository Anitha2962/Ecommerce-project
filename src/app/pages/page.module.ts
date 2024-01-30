import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AllproductComponent } from "./allproduct/allproduct.component";
import { HomeComponent } from "./home/home.component";
import { SignuppageComponent } from "./signuppage/signuppage.component";
import { ViewpageComponent } from "./viewpage/viewpage.component";
import { CartpageComponent } from './cartpage/cartpage.component';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NotFoundComponent } from './not-found/not-found.component';
import { CoreModule } from "../core/core.module";
import { RegisterpageComponent } from './registerpage/registerpage.component';

@NgModule({
    declarations:
    [
      AllproductComponent,
      HomeComponent,
      SignuppageComponent,
      ViewpageComponent,
      CartpageComponent,
      NotFoundComponent,
      RegisterpageComponent,
      
    
  ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        CoreModule
    ]

})
export class PagesModule{}