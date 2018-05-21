import { TestBed, inject } from '@angular/core/testing';

import { ReminderDataService } from './reminder-data.service';

describe('ReminderDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReminderDataService]
    });
  });

  it('should be created', inject([ReminderDataService], (service: ReminderDataService) => {
    expect(service).toBeTruthy();
  }));
});
