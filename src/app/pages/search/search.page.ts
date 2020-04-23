import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from  '@ionic/storage';




@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  constructor(private router: Router, private http: HttpClient, private storage: Storage) { 


    
  }
  // ionViewWillEnter(){
  //   console.log('hi')
  // }

//   ionViewWillEnter(){
//     this.storage.get('user_name').then((user_name) => {
//     this.userName = user_name
//   });
//   this.storage.get('user_email').then((user_email) => {
//     this.userEmail = user_email
//   });
// }

my_dict = []

ngOnInit() {
  console.log("init")
  this.storage.get('my_dict').then((my_dict) => {
    if(my_dict){
      if(my_dict.length > 0){
        this.my_dict = my_dict
      }
    }
  });
}
  results: Promise<any>;
  //results: Promise<any>;
  searchTerm: string
  current_search: boolean = false;
  definitions_one: Array<string> = [];
  definitions_two: Array<string> = [];
  definitions_three: Array<string> = [];
  desc_definitions_one: string
  desc_definitions_two: string
  desc_definitions_three: string

  search(this){
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
    return this.results = this.http.get(url).subscribe((data: Response) => {
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
 
      // for (let i = 1; i < 5; i++) {
      //   console.log(data[i]['shortdef'])
      //   console.log(data[i]['shortdef'].length)
      //   if(data[i]['shortdef'].length > 0){
      //     this.definitions.push(data[i])
      //   }
      // }
    });
  }
  
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

  this.my_dict.push([my_word])

  console.log(this.my_dict)
  
  this.storage.set("my_dict", this.my_dict);


//console.log(my_dict)
  //console.log(this.definitions_one)

  // if (res.user) {
  //   await this.storage.set("ACCESS_TOKEN", res.user.access_token);
  //   await this.storage.set("EXPIRES_IN", res.user.expires_in);
  //   await this.storage.set("user_id", res.user.id)
  //   await this.storage.set("user_name", res.user.name)
  //   await this.storage.set("user_email", res.user.email)
  //   this.authSubject.next(true);
  // }
}




}
