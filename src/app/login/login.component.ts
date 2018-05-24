import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('init complete');
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
        .done(function () {
          console.log('hello3');
          $(location).attr('href', 'http://localhost:3000/welcome');
        });

  }
}
