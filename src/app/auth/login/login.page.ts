import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { Storage } from  '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private  authService:  AuthService, private  router:  Router, private storage: Storage) { }

  ngOnInit() {
  }

  userName: string
  userEmail: string
  user_id: number

  my_dict = [];
  current_word: any 

  login(form){
    this.authService.login(form.value).subscribe((res)=>{
      this.my_dict = [];
      console.log(res)
      if(res.user){
        console.log("res id")
        console.log(res.user.id)
        // this.storage.get('user_id').then((user_id) => {
        //   this.user_id = user_id
    
          const user_id = {
            user_id: res.user.id,
          }
          console.log(user_id)
          
          this.authService.getUserDictionary(user_id).subscribe((res) => {
            for (var i = 0; i < res.user_dict.length; i++) {
              this.my_dict.push(JSON.parse(res.user_dict[i]['dictionary']))
            }
            this.authService.my_dict = this.my_dict;
            console.log("loginnn")
            console.log(this.my_dict)
            //this.storage.set("my_dict", this.my_dict);
          });
        // })    
        //this.router.navigateByUrl('/tabs/search');
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