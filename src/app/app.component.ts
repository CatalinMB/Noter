import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AuthService } from './auth.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {

  // isLoggedIn$: Observable<boolean>;
  private config = { hour: 7, minute: 15, meriden: 'PM', format: 12 };

  constructor(private authService: AuthService) { }

  // ngOnInit() {
  //     this.isLoggedIn$ = Observable.of(this.authService.isLoggedIn); // {2}

  // }
  // Configuration of the time picker (format 12H with a default date and time)

}
