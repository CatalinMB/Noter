import {Injectable} from '@angular/core';
import {Reminder} from './reminder';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Http, Response } from '@angular/http';

@Injectable()
export class ReminderDataService {

  lastId = 0;

  constructor(private http: Http) {
  }

  // Simulate POST /reminders
  addReminder(reminder: Reminder): Observable<Reminder> {
    if (!reminder.id) {
      reminder.id = ++this.lastId;
    }
    return this.http
      .post('http://localhost:3000/reminder', reminder)
      .map(response => {
        return new Reminder(response.json());
      })
      .catch(this.handleError);
  }

  // Simulate DELETE /Reminders/:id
  deleteReminderById(reminderId: number): Observable<null> {
    return this.http
      .delete('http://localhost:3000/reminder/' + reminderId)
      .map(response => null)
      .catch(this.handleError);
  }


  // Simulate GET /reminder
  getAllreminders(): Observable<Reminder[]> {
    return this.http
      .get('http://localhost:3000/reminder')
      .map(response => {
        const reminders = response.json();
        return reminders.map((reminder) => new Reminder(reminder));
      })
      .catch(this.handleError);
  }

  // Simulate GET /reminders/:id
 getReminderById(reminderId: number): Observable<Reminder> {
    return this.http
      .get('http://localhost:3000/reminder' + reminderId)
      .map(response => {
        return new Reminder(response.json());
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('handleError', error);
    return Observable.throw(error);
  }
}
