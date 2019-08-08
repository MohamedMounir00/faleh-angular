import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccpetOrderComponent } from './accpet-order.component';

describe('AccpetOrderComponent', () => {
  let component: AccpetOrderComponent;
  let fixture: ComponentFixture<AccpetOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccpetOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccpetOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
