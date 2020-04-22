import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Storage } from  '@ionic/storage';
import { AuthService } from '../../auth/auth.service';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private  httpClient:  HttpClient, private  storage:  Storage, private  authService:  AuthService, private  router:  Router) { 
  };
  
  logout(){
    this.authService.logout()
    this.router.navigateByUrl('/login');
  }

  
  userName: string
  ngOnInit() {
    this.storage.get('user_name').then((user_name) => {
      this.userName = user_name
    });
    this.storage.get('user_email').then((user_email) => {
      this.userEmail = user_email
    });
  }


}


