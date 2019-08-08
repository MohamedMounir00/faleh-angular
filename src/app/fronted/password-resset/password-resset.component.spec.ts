import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRessetComponent } from './password-resset.component';

describe('PasswordRessetComponent', () => {
  let component: PasswordRessetComponent;
  let fixture: ComponentFixture<PasswordRessetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordRessetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordRessetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
