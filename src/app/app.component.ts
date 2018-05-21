import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Configuration of the time picker (format 12H with a default date and time)
  private config = { hour: 7, minute: 15, meriden: 'PM', format: 12 };
}
