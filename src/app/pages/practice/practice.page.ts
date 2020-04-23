import { Component, OnInit } from '@angular/core';
import { Storage } from  '@ionic/storage';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.page.html',
  styleUrls: ['./practice.page.scss'],
})
export class PracticePage implements OnInit {

  constructor(private  storage:  Storage) { }

  ngOnInit() {
  }

my_dict = []

ionViewWillEnter(){
  this.storage.get('my_dict').then((my_dict) => {
    if(my_dict){
      if(my_dict.length > 0){
        this.my_dict = my_dict 
      }
    }
  });
}

}
