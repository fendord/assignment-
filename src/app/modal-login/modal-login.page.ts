import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams,ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.page.html',
  styleUrls: ['./modal-login.page.scss'],
})
export class ModalLoginPage implements OnInit {
userName = "";
password = "";
loginCount:number = 0;
  constructor(private modalController:ModalController, private router:Router) {
    
   }

  ngOnInit() {

  }

  // login function that uses the username and password inputs to login and route to home page
  login() {
    if (this.userName == "fendord" && this.password == "password"){
    this.router.navigateByUrl('/home/' + this.userName);
    this.loginCount++;
    this.modalController.dismiss();
    }else{alert( 'Username or password incorect is incorrect!')

    }

  }

  // close modal functions that the back button uses
  closemodal(){
    this.modalController.dismiss();
  }
}
