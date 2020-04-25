import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from  '@ionic/storage';
import { Observable, BehaviorSubject } from  'rxjs';
//import { User } from  '../auth/user';
// import { AuthResponse } from  '../../auth/auth-response';
import { AuthService } from '../../auth/auth.service';




@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  constructor(private router: Router, private http: HttpClient, private storage: Storage, private  authService:  AuthService) {  
  }

userName = this.authService.user_name;
userEmail = this.authService.user_email;
user_id = this.authService.user_id;
my_dict = this.authService.my_dict;
added: boolean;

ngOnInit() {
  console.log("init")
  // this.storage.get('my_dict').then((my_dict) => {
  //   if(my_dict){
  //     if(my_dict.length > 0){
  //       this.my_dict = my_dict
  //     }
  //   }
  // });
  // this.storage.get('user_id').then((user_id) => {
  //   this.user_id = user_id
  // });
}
  results: Promise<any>;
  searchTerm: string
  current_search: boolean = false;
  definitions_one: Array<string> = [];
  definitions_two: Array<string> = [];
  definitions_three: Array<string> = [];
  desc_definitions_one: string
  desc_definitions_two: string
  desc_definitions_three: string
  searchQuery: string

  search($event: any){
    this.added = false;
    this.definitions_one = []
    this.definitions_two = [];
    this.definitions_three = [];
    this.desc_definitions_one = '';
    this.desc_definitions_two = '';
    this.desc_definitions_three = '';
    this.current_search = true
    this.searchTerm = this.searchQuery.toLowerCase();
    var api_key = '16ae4026-d367-49ba-a295-db9a200ef47c';
    var word_id = this.searchQuery;
    var url = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/' + word_id + '?key=' + api_key; 
    this.http.get(url).subscribe((data: Response) => {
      console.log(data);
      this.definitions_one = data[0]['shortdef']
      this.desc_definitions_one = data[0]['fl']
      if(data[1]){
        if(data[1]['shortdef'].length > 0){
          this.definitions_two = data[1]['shortdef']
          this.desc_definitions_two = data[1]['fl']
        }
      }
      if(data[2]){
        if(data[2]['shortdef'].length > 0){
          this.definitions_three = data[2]['shortdef']
          this.desc_definitions_three = data[2]['fl']
        }
      }
    });
  }
AUTH_SERVER_ADDRESS:  string  =  'http://localhost:3000';
//user_id: number = this.storage.get("user_id", res.user.id);
current_dict_object: Object
saveWord(){
  var my_word = {
    word: this.searchTerm,
    info: {
      one: {
        form: this.desc_definitions_one,
        defs: this.definitions_one
      }
    }
  } 
  if(this.definitions_two.length > 0){
    my_word.info["two"] = {
      form: this.desc_definitions_two,
      defs: this.definitions_two
    }
  }
  if(this.definitions_three.length > 0){
    my_word.info["three"] = {
      form: this.desc_definitions_three,
      defs: this.definitions_three
    }
  }
  this.authService.my_dict.push(my_word)
  console.log("this.my_dict")
  console.log(this.my_dict)

  // this.storage.set("my_dict", this.my_dict);

  //this.user_id = this.storage.get("user_id", res.user.id)
  const current_dict_object = {
    user_id: this.user_id,
    dictionary: my_word
  }

  // console.log('current_dict_object')
  // console.log(current_dict_object)

  this.authService.addToDictionary(current_dict_object).subscribe((res) => {
    this.added = true;
    console.log("add response")
    console.log(res)
    //this.router.navigateByUrl('tabs/search');
  });




}

}