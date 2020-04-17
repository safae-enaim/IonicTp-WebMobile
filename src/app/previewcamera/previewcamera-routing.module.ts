import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewcameraPage } from './previewcamera.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewcameraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewcameraPageRoutingModule {}
