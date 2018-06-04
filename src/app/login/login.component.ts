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

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(event) {

    event.preventDefault();

    const logemail = $('#email-field').val();
    const logpassword = $('#password-field').val();
    console.log(logemail, ' ', logpassword);
    console.log('i am here');

    if (!logemail) {
      $('#emailError').css('visibility', 'visible');
    } else {
      if (!logpassword) {
        $('#passwordError').css('visibility', 'visible');
      } else {
        $.post('http://localhost:3000/login', { email: logemail, password: logpassword }, function (data) {
          console.log(data);
        })
          .done(() => {
            this.auth.isLoggedIn = true;
            sessionStorage.setItem('token', 'Logged in');
            $('#emailError').css('visibility', 'hidden');
            $('#passwordError').css('visibility', 'hidden');
          });
      }
    }
  }
}
