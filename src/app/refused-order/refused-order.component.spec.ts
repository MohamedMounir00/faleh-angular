import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefusedOrderComponent } from './refused-order.component';

describe('RefusedOrderComponent', () => {
  let component: RefusedOrderComponent;
  let fixture: ComponentFixture<RefusedOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefusedOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefusedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
