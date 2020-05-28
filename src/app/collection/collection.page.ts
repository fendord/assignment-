import { Component, OnInit } from '@angular/core';
import {ModalMapPage} from '../modal-map/modal-map.page';
import {ModalController} from '@ionic/angular'
@Component({
  selector: 'app-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.scss'],
})
export class CollectionPage {

  constructor(private modalController: ModalController) {

  }
  // function to create Map modal page
  async MapModal(){
    const modal = await this.modalController.create({
    component: ModalMapPage,
    componentProps: { }
    });
      return await modal.present();
  }

}