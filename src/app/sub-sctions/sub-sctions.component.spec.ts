import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSctionsComponent } from './sub-sctions.component';

describe('SubSctionsComponent', () => {
  let component: SubSctionsComponent;
  let fixture: ComponentFixture<SubSctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubSctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
