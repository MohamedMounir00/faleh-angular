import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFalehComponent } from './about-faleh.component';

describe('AboutFalehComponent', () => {
  let component: AboutFalehComponent;
  let fixture: ComponentFixture<AboutFalehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutFalehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFalehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
