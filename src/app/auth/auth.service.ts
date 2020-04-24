import { Injectable } from  '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { Storage } from  '@ionic/storage';
import { User } from  './user';
import { UserDict } from  './user_dict';
import { UserId } from  './user_id';
import { AuthResponse } from  './auth-response';
import { DictResponse } from  './DictResponse';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  AUTH_SERVER_ADDRESS:  string  =  'http://localhost:3000';
  authSubject  =  new  BehaviorSubject(false);
  constructor(private  httpClient:  HttpClient, private  storage:  Storage) { };
  register(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/register`, user).pipe(
      tap(async (res:  AuthResponse ) => {

        if (res.user) {
          await this.storage.set("ACCESS_TOKEN", res.user.access_token);
          await this.storage.set("EXPIRES_IN", res.user.expires_in);
          await this.storage.set("user_id", res.user.id)
          await this.storage.set("user_name", res.user.name)
          await this.storage.set("user_email", res.user.email)
          this.authSubject.next(true);
        }
      })

    );
  };
  login(user: User): Observable<AuthResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/login`, user).pipe(
      tap(async (res: AuthResponse) => {

        if (res.user) {
          this.storage.set("ACCESS_TOKEN", res.user.access_token);
          this.storage.set("EXPIRES_IN", res.user.expires_in);
          this.storage.set("user_id", res.user.id)
          this.storage.set("user_name", res.user.name)
          this.storage.set("user_email", res.user.email)
          this.authSubject.next(true);
          //console.log(res.user)
        }
      })
    );
  };
  async logout() {
    await this.storage.remove("ACCESS_TOKEN");
    await this.storage.remove("EXPIRES_IN");
    await this.storage.remove("user_id")
    await this.storage.remove("user_name")
    await this.storage.remove("user_email")
    await this.storage.remove("my_dict")
    await this.authSubject.next(true);
    this.authSubject.next(false);
  };
  isLoggedIn() {
    return this.authSubject.asObservable();
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

}

