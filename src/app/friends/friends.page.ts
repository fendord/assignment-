import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage'

import {AddContactModalPage} from '../add-contact-modal/add-contact-modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  firstName:string;
  lastName:string;

  contacts = [{ firstName: 'brodie', lastName: 'Hueppauff'}, 
  { firstName: 'sentamara', lastName: 'Hueppauff'}, 
  { firstName: 'sylvanas', lastName: 'windrunner'}]

  constructor(private modalController: ModalController, private storage:Storage, private router:Router) {}



  async ngOnInit(){
    this.firstName = await this.storage.get("firstName");
    this.lastName = await this.storage.get("lastName");
  }

  updatefirstName(){
    this.storage.set("firstName",this.firstName);
  }
  updatename(){
    this.storage.set("lastName",this.lastName);
  }


  // function to create add contact modal page
  async addFriend(){

    const modal = await this.modalController.create({
      component: AddContactModalPage,
      componentProps: { }
    });
    return await modal.present();
  }


}

