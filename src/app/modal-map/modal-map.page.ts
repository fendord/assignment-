import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { NavParams,ModalController } from '@ionic/angular';
declare var google;
@Component({
  selector: 'app-modal-map',
  templateUrl: './modal-map.page.html',
  styleUrls: ['./modal-map.page.scss'],
})
export class ModalMapPage implements OnInit {
  @ViewChild('map', {static:false}) mapElement;
  map: any;

  constructor(private modalController:ModalController) { }
  
  ngOnInit() {}

  // function to display google map location atm hardcoded map coords with info window and geolocation commented out
  ionViewDidEnter() {
    console.log('ngOninit MapPage');

    let latLng = new google.maps.LatLng(-31.962142, 115.841076);
    let mapOptions = {
      center: latLng,
      zoom:15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      fullscreenControl: true
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker = new google.maps.Marker({

      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
  
  
    });

    let infoWindow = new google.maps.InfoWindow({
      content: '<h4> giant boab tree</h4>'
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);

    })

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(position => {

    //     let pos = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     }
    //     this.map.setCenter(pos);
    //   });
    // } else {
    //   alert("Geolocation not supported");
    //   }


  }
  // close modal function
  closemodal(){
    this.modalController.dismiss();
  }
}
