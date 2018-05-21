import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderListHeaderComponent } from './reminder-list-header.component';

describe('ReminderListHeaderComponent', () => {
  let component: ReminderListHeaderComponent;
  let fixture: ComponentFixture<ReminderListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
