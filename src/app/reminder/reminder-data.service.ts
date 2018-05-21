import { Injectable } from '@angular/core';
import { Reminder } from './reminder';

@Injectable()
export class ReminderDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId = 0;

  // Store the reminders
  reminders: Reminder[] = [];

  constructor() { }


  //Simulate POST /reminders
  //Adding Nodejs functionallity for the future ( for POST )
  addReminder(reminder: Reminder): ReminderDataService {
    if (!reminder.id) {
      reminder.id = ++this.lastId;
    }
    this.reminders.push(reminder);
    return this;
  }

  //Simulate DELETE /reminders/:id
  //Adding NodeJs ..
  deleteRemindersById(id: number): ReminderDataService {
    this.reminders = this.reminders.filter(reminder => reminder.id !== id);
    return this;
  }

  //Simuate PUT /reminders/id
  updateRemindersById(id: number, values: Object = {}): Reminder {
    const reminder = this.getReminderById(id);
    if (!reminder) {
      return null;
    }
    Object.assign(reminder, values);
    return reminder;
  }

  // Simulate GET /reminders
  getAllReminders(): Reminder[] {
    return this.reminders;
  }

  // Simulate GET /todos/:id
  getReminderById(id: number): Reminder {
    return this.reminders.filter(reminder => reminder.id === id).pop();
  }
}
