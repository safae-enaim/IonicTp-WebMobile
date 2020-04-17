import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreviewcameraPage } from './previewcamera.page';

describe('PreviewcameraPage', () => {
  let component: PreviewcameraPage;
  let fixture: ComponentFixture<PreviewcameraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewcameraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreviewcameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

});
