import { Component, OnInit } from '@angular/core';
import { NavParams,ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-contact-modal',
  templateUrl: './add-contact-modal.page.html',
  styleUrls: ['./add-contact-modal.page.scss'],
})
export class AddContactModalPage implements OnInit {
  Name="";
  constructor(private navParams:NavParams,private modalController:ModalController) { }

  ngOnInit() {
  }

  closemodal(){
    this.modalController.dismiss();
  }

}
