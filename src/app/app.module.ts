import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AllproductComponent } from './pages/allproduct/allproduct.component'
import { ViewpageComponent } from './pages/viewpage/viewpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { CartpageComponent } from './pages/cartpage/cartpage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AllproductComponent,
   
    ViewpageComponent,
    SignuppageComponent,
    CartpageComponent,
    NotFoundComponent,
    RegisterpageComponent
  

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
