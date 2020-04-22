import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Storage } from  '@ionic/storage';
import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {
  constructor(private  storage:  Storage) { 
  };
  userName: string
  userEmail: string
  
  ionViewWillEnter(){
      this.storage.get('user_name').then((user_name) => {
      this.userName = user_name
    });
    this.storage.get('user_email').then((user_email) => {
      this.userEmail = user_email
    });
  }

}
