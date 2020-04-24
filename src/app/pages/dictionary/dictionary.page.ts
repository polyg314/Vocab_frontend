import { Component, OnInit } from '@angular/core';
import { Storage } from  '@ionic/storage';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.page.html',
  styleUrls: ['./dictionary.page.scss'],
})
export class DictionaryPage implements OnInit {

  constructor(private  storage:  Storage, private authService: AuthService) { }

  ngOnInit() {
  }

my_dict = this.authService.my_dict

ionViewWillEnter(){

  // this.storage.get('my_dict').then((my_dict) => {
  //   if(my_dict){
  //     if(my_dict.length > 0){
  //       this.my_dict = my_dict
  //       console.log("my_dict_page")
  //       console.log(my_dict)
  //     }
  //   }
  // });
}

}
