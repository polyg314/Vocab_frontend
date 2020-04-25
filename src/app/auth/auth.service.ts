import { Injectable } from  '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable } from  'rxjs';
import { ToastController, Platform } from '@ionic/angular';
import { Storage } from  '@ionic/storage';
import { User } from  './user';
import { UserDict } from  './user_dict';
import { UserId } from  './user_id';
import { AuthResponse } from  './auth-response';
import { DictResponse } from  './DictResponse';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})



export class AuthService {
  //AUTH_SERVER_ADDRESS:  string  =  'http://localhost:3000';
  AUTH_SERVER_ADDRESS:  string  =  'https://radiant-woodland-34220.herokuapp.com';
  authSubject  =  new  BehaviorSubject(false);
  authState = new BehaviorSubject(false);
  user_id: number;
  // user_id = 5;
  user_email: string;
  user_name: string;  
  my_dict = [];
  constructor(private  httpClient:  HttpClient, private  storage:  Storage,
    private router: Router, 
    private platform: Platform,
    public toastController: ToastController) { };
  register(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/register`, user).pipe(
      tap(async (res:  AuthResponse ) => {

        if (res.user) {
          console.log(res.user)
          
          this.user_id = res.user.id;
          this.user_email = res.user.email;
          this.user_name = res.user.name;
          // await this.storage.set("ACCESS_TOKEN", res.user.access_token);
          // await this.storage.set("EXPIRES_IN", res.user.expires_in);
          // await this.storage.set("user_id", res.user.id)
          // await this.storage.set("user_name", res.user.name)
          // await this.storage.set("user_email", res.user.email)
          this.router.navigateByUrl('/tabs/search');
          this.authState.next(true);
        }
      })

    );
  };
  login(user: User): Observable<AuthResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/login`, user).pipe(
      tap(async (res: AuthResponse) => {

        if (res.user) {
          console.log("um")
          this.user_id = res.user.id;
          this.user_email = res.user.email;
          this.user_name = res.user.name;
          // this.storage.set("ACCESS_TOKEN", res.user.access_token);
          // this.storage.set("EXPIRES_IN", res.user.expires_in);
          // this.storage.set("user_id", res.user.id)
          // this.storage.set("user_name", res.user.name)
          // this.storage.set("user_email", res.user.email)
          this.authState.next(true);
          console.log("this auth subject")
          console.log(this.authSubject.value)
          this.router.navigateByUrl('/tabs/search');
          //console.log(res.user)
        }
      })
    );
  };
  async logout() {
    this.user_id = null;
    this.user_email = null;
    this.user_name = null;
    this.my_dict = [];
    // await this.storage.remove("ACCESS_TOKEN");
    // await this.storage.remove("EXPIRES_IN");
    // await this.storage.remove("user_id")
    // await this.storage.remove("user_name")
    // await this.storage.remove("user_email")
    // await this.storage.remove("my_dict")
    await this.authState.next(false);
    //this.authSubject.next(false);
    this.router.navigateByUrl('/login');
  };
  isLoggedIn() {
    if(this.user_id){
      this.authState.next(true);
    }else{
      this.user_email = null;
      this.user_name = null;
      this.my_dict = [];
    }
    // this.storage.get('user_id').then((response) => {
    //   if (response) {
    //     console.log("this.authState isLoggedIn")
    //     console.log(this.authState.value)
    //     this.authState.next(true);
    //   }
    // });
  };
  addToDictionary(current_dict_object: UserDict): Observable<DictResponse> {
    return this.httpClient.post<DictResponse>(`${this.AUTH_SERVER_ADDRESS}/dictionary`, current_dict_object).pipe(
      tap(async (res:  DictResponse ) => {
        if(res){
          await console.log("responded!")
          console.log(res.user_dict)
        }
      })
  )}
  getUserDictionary(user_id: UserId): Observable<DictResponse> {
    return this.httpClient.post<DictResponse>(`${this.AUTH_SERVER_ADDRESS}/dictionary_get`, user_id).pipe(
      tap(async (res:  DictResponse ) => {
        if(res){
          await console.log("responded!")
          console.log(res.user_dict)
        }
      })
  )}
  isAuthenticated() {
    return this.authState.value;
  }



}

