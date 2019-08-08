import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserConversationsComponent } from './get-user-conversations.component';

describe('GetUserConversationsComponent', () => {
  let component: GetUserConversationsComponent;
  let fixture: ComponentFixture<GetUserConversationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUserConversationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserConversationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
