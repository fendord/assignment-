import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddContactModalPage } from './add-contact-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddContactModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddContactModalPageRoutingModule {}
