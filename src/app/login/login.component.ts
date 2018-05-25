import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

  constructor(  private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(event) {

      console.log('hello2');
      event.preventDefault();

      let logemail = $("#email-field").val();
      let logpassword = $("#password-field").val();
      console.log(logemail, " ", logpassword);
      console.log("i am here");

      $.post("http://localhost:3000/login", { email: logemail, password: logpassword }, function (data) {
        console.log(data);
      })
        .done(() => {
          this.auth.isLoggedIn = true;
          console.log('hello3');
        });

  }
}
