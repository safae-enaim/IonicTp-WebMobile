import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewcameraPageRoutingModule } from './previewcamera-routing.module';

import { PreviewcameraPage } from './previewcamera.page';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewcameraPageRoutingModule
  ],
  declarations: [PreviewcameraPage],
  providers: [CameraPreview]
})
export class PreviewcameraPageModule {}
