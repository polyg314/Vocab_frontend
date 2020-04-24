import { Component, OnInit } from '@angular/core';
import { Storage } from  '@ionic/storage';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.page.html',
  styleUrls: ['./practice.page.scss'],
})
export class PracticePage implements OnInit {

  constructor(private  storage:  Storage, private authService: AuthService) { }

  ngOnInit() {
  }

my_dict = this.authService.my_dict

ionViewWillEnter(){
  console.log(this.authService.my_dict)
  console.log(this.authService.user_id)
  // this.storage.get('my_dict').then((my_dict) => {
  //   if(my_dict){
  //     if(my_dict.length > 0){
  //       this.my_dict = my_dict 
  //     }
  //   }
  // });
}

practicing: boolean = false 
beginPractice(){
  this.practicing = true
  this.createCountArray()
  this.showNextCard()
  console.log("begin")
}

current_word: string
dict_length:number 
count_array = [];

shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

current_index: number = 0

createCountArray(){
  this.dict_length = this.my_dict.length
  this.count_array = [];
  for (var i = 0; i < this.dict_length; i++) {
    this.count_array.push(i);
  }
  this.count_array = this.shuffle(this.count_array)

  for (var j = 0; j < this.dict_length; j++) {
    console.log(this.count_array[j])
  }
}

onlyWord:boolean = false
defs_shown: boolean = false;

showNextCard(){
  this.defs_shown = false
  this.onlyWord = true
  this.current_word = this.my_dict[this.count_array[this.current_index]].word
}

definitions_one = []
definitions_two = [];
definitions_three = [];
desc_definitions_one = '';
desc_definitions_two = '';
desc_definitions_three = '';
final_word:boolean = false;

showDefinitions(){
  this.defs_shown = true;
  this.onlyWord = false;
  this.definitions_one = []
  this.definitions_two = [];
  this.definitions_three = [];
  this.desc_definitions_one = '';
  this.desc_definitions_two = '';
  this.desc_definitions_three = '';
  this.definitions_one = this.my_dict[this.count_array[this.current_index]].info.one.defs;
  this.desc_definitions_one = this.my_dict[this.count_array[this.current_index]].info.one.form;
  if(this.my_dict[this.count_array[this.current_index]].info.two){
    this.definitions_two = this.my_dict[this.count_array[this.current_index]].info.two.defs
    this.desc_definitions_two = this.my_dict[this.count_array[this.current_index]].info.two.form
  };
  if(this.my_dict[this.count_array[this.current_index]].info.three){
    this.definitions_three = this.my_dict[this.count_array[this.current_index]].info.three.defs
    this.desc_definitions_three = this.my_dict[this.count_array[this.current_index]].info.three.form
  };
  if(this.current_index === this.dict_length - 1){
    this.final_word = true;
  }else{
    this.current_index = this.current_index + 1
  }
}

finishStack(){
  this.current_index = 0;
  this.practicing = false;
  this.defs_shown = false;
  this.onlyWord = false;
  this.final_word = false;
}




}