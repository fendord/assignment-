import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddContactModalPageRoutingModule } from './add-contact-modal-routing.module';

import { AddContactModalPage } from './add-contact-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddContactModalPageRoutingModule
  ],
  declarations: [AddContactModalPage]
})
export class AddContactModalPageModule {}
