import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSailingComponent } from './signup-sailing.component';

describe('SignupSailingComponent', () => {
  let component: SignupSailingComponent;
  let fixture: ComponentFixture<SignupSailingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupSailingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
