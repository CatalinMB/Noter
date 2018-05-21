import { Component, OnInit } from '@angular/core';
import { ReminderDataService } from './reminder-data.service';
import { Reminder } from './reminder';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css'],
  providers: []
})
export class ReminderComponent implements OnInit  {
  title = 'app';
  // newreminder: reminder = new reminder();

  constructor(private reminderDataService: ReminderDataService) {
  }

  // addreminder() {
  //   this.reminderDataService.addreminder(this.newreminder);
  //   this.newreminder = new reminder ();
  // }

  ngOnInit() {

  }

  onAddReminder(reminder: Reminder) {
    this.reminderDataService.addReminder(reminder);
  }

  onRemoveReminder(reminder) {
    this.reminderDataService.deleteRemindersById(reminder.id);
  }

  get reminders() {
    return this.reminderDataService.getAllReminders();
  }

}


