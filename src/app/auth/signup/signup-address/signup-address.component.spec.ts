import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAddressComponent } from './signup-address.component';

describe('SignupAddressComponent', () => {
  let component: SignupAddressComponent;
  let fixture: ComponentFixture<SignupAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
