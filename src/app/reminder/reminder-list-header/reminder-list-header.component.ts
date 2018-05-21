import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Reminder } from '../reminder';
import { AmazingTimePickerService } from 'amazing-time-picker';

@Component({
  selector: 'app-reminder-list-header',
  templateUrl: './reminder-list-header.component.html',
  styleUrls: ['./reminder-list-header.component.css']
})
export class ReminderListHeaderComponent implements OnInit {

  newReminder: Reminder = new Reminder();

  @Output()
  add: EventEmitter<Reminder> = new EventEmitter();

  // @Input()
  // event: 

  constructor(private atp: AmazingTimePickerService) { }

  ngOnInit() {
  }

  addReminder(){
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      // console.log(time);
      const selectedTime ={
        // tslint:disable-next-line:radix
        hours: parseInt(time.split(':')[0]),
        // tslint:disable-next-line:radix
        minutes:  parseInt(time.split(':')[1])
      };

      // this.newReminder = new Reminder();
      this.newReminder.time = selectedTime;
      this.add.emit(this.newReminder);
      console.log(this.newReminder.getTime);
      this.newReminder = new Reminder();
    });
  }

}
