import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderListFooterComponent } from './reminder-list-footer.component';

describe('ReminderListFooterComponent', () => {
  let component: ReminderListFooterComponent;
  let fixture: ComponentFixture<ReminderListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
