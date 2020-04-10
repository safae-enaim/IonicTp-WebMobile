import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string;
  imgData: string;
   locationWatchStarted:boolean;
   locationSubscription:any;
   locationTraces = [];


  constructor(private alertController: AlertController, private camera: Camera, private geolocation: Geolocation) {}

  updateTitle() {
    this.title = 'Mon Nouveau Titre';
  }

  /**
   * https://ionicframework.com/docs/api/alert
   */
  async fireAlert() {
    // creation de l alerte
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    // quand l alerte sera masquée
    alert.onDidDismiss().then(() => console.log('alerte masquée'))

    // affichage de l alerte
    await alert.present();
  }

  takePicture() {
       const options: CameraOptions = {
         quality: 100,
         destinationType: this.camera.DestinationType.DATA_URL,
         encodingType: this.camera.EncodingType.JPEG,
         mediaType: this.camera.MediaType.PICTURE
       };

       this.camera.getPicture(options).then((imageData) => {
         // imageData is either a base64 encoded string or a file URI
         // If it's base64 (DATA_URL):
         console.log(imageData);
         this.imgData = 'data:image/jpeg;base64,' + imageData;
       }, (err) => {
         // Handle error
       });
     }

    getCoordinates() {
        this.geolocation.getCurrentPosition().then((resp) => {

          this.locationTraces.push({
            latitude:resp.coords.latitude,
            longitude:resp.coords.latitude,
            accuracy:resp.coords.accuracy,
            timestamp:resp.timestamp
          });

        }).catch((error) => {
          console.log('Error getting location', error);
        });

        this.locationSubscription = this.geolocation.watchPosition();
        this.locationSubscription.subscribe((resp) => {

          this.locationWatchStarted = true;
          this.locationTraces.push({
            latitude:resp.coords.latitude,
            longitude:resp.coords.latitude,
            accuracy:resp.coords.accuracy,
            timestamp:resp.timestamp
          });

        });
   }   }