import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldordersComponent } from './oldorders.component';

describe('OldordersComponent', () => {
  let component: OldordersComponent;
  let fixture: ComponentFixture<OldordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
