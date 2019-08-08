import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSctionsComponent } from './all-sctions.component';

describe('AllSctionsComponent', () => {
  let component: AllSctionsComponent;
  let fixture: ComponentFixture<AllSctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
