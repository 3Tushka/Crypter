import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationActivityComponent } from './notification-activity.component';

describe('NotificationActivityComponent', () => {
  let component: NotificationActivityComponent;
  let fixture: ComponentFixture<NotificationActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationActivityComponent]
    });
    fixture = TestBed.createComponent(NotificationActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
