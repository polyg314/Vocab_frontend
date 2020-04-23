import { Component, OnInit } from '@angular/core';
import { Storage } from  '@ionic/storage';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private  storage:  Storage, private  router:  Router) { 
  };

  // ionViewWillEnter(){
  //   console.log('hi')
  // }
  ngOnInit() {
    console.log("init")
    this.storage.get('user_name').then((user_name) => {
      if(!user_name){
        console.log("ok")
        this.router.navigateByUrl('/login');
      }
    });
  }

  toggleMenu(){
//    console.log(document.getElementById("vocab-app-menu"));
  //  document.getElementById("vocab-app-menu").classList.remove("show-menu");
    //document.body.className = document.body.className.replace("backdrop-no-scroll","");
  }
}


