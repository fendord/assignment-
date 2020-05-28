import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-my-location',
  templateUrl: './my-location.page.html',
  styleUrls: ['./my-location.page.scss'],
})
export class MyLocationPage{
  imageFile:string;

  constructor(private storage:Storage) { 
    this.storage.get('avatar').then(val => {
      this.imageFile = val;
      });
  }


  imageSelected(files) {
    let fileReader = new FileReader();
    fileReader.onload = e => {
      this.imageFile = fileReader.result;
      this.storage.set('avatar', this.imageFile);
      };
    fileReader.readAsDataURL(files[0]);
    }
}
