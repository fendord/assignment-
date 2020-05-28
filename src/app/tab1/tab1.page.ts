import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular'
import { from } from 'rxjs';
import {ModalLoginPage} from '../modal-login/modal-login.page';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalController: ModalController) {

  }
  async loginModal(){
    const modal = await this.modalController.create({
    component: ModalLoginPage,
    componentProps: { }
    });
      return await modal.present();
  }

}
