import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private  authService:  AuthService, private  router:  Router) { }

  ngOnInit() {
  }

  login(form){
    this.authService.login(form.value).subscribe((res)=>{
      console.log(res)
      if(res.user){
        this.router.navigateByUrl('/tabs/search');
      }

    });
  }
  checkStatus(){
    console.log("check")
  }
  logout(){
    console.log("logout")
  }


}