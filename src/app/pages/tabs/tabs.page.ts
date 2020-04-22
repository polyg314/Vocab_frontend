import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(){
//    console.log(document.getElementById("vocab-app-menu"));
  //  document.getElementById("vocab-app-menu").classList.remove("show-menu");
    //document.body.className = document.body.className.replace("backdrop-no-scroll","");
  }
}


