import { Component, OnInit } from '@angular/core';
import { ReminderDataService } from './reminder-data.service';
import { Reminder } from './reminder';


@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css'],
  providers: []
})
export class ReminderComponent implements OnInit {

  reminders: Reminder[] = [];

  constructor(private reminderDataService: ReminderDataService) {
  }

  ngOnInit() {
    this.reminderDataService
    .getAllReminders()
    .subscribe(
      (reminders) => {
        this.reminders = reminders;
        console.log(reminders, 'reminders');
      }
    );
  }

  onAddReminder(reminder: Reminder) {
    this.reminderDataService
    .addReminder(reminder)
    .subscribe(
      (reminders) => {
        this.reminders.push(reminder);
      }
    );
    setInterval(function () {
      const date = new Date();
      if (date.getHours() === reminder.time.hours && date.getMinutes() === reminder.time.minutes) {
          alert(reminder.title);
      }
  }, 60000);
  }

  onRemoveReminder(reminder) {
    this.reminderDataService
      .deleteReminderById(reminder.id)
      .subscribe(
        (_) => {
          this.reminders = this.reminders.filter((r) => r.id !== reminder.id);
          console.log('length after delete ' + this.reminders.length);
        }
      );
  }

}


