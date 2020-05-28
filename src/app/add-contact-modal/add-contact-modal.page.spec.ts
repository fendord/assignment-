import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddContactModalPage } from './add-contact-modal.page';

describe('AddContactModalPage', () => {
  let component: AddContactModalPage;
  let fixture: ComponentFixture<AddContactModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContactModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddContactModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
