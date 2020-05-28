import { Component, OnInit } from '@angular/core';
import {ModalLoginPage} from '../modal-login/modal-login.page';
import {ModalController} from '@ionic/angular'
@Component({
  selector: 'app-front',
  templateUrl: './front.page.html',
  styleUrls: ['./front.page.scss'],
})
export class FrontPage {

  constructor(private modalController: ModalController) {

  }
  // login modal funtion that creates the login modal page
  async loginModal(){
    const modal = await this.modalController.create({
    component: ModalLoginPage,
    componentProps: { }
    });
      return await modal.present();
  }

}
