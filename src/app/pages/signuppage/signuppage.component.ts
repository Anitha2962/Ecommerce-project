import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent  implements OnInit{
  signupUsers:any[]=[];
  signupObj:any={
    username:'',
    password:''
  };
  constructor(){}
  ngOnInit(): void {
    
  }
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj={
      username:'',
      password:''
    };
  }
}
