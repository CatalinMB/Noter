import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event){
      event.preventDefault();

      let semail = $("#semail-field").val();
      let susername = $("#susername-field").val();
      let spassword = $("#spassword-field").val();

      $.post("http://localhost:3000/signup", {
        email: semail,
        username: susername,
        password: spassword
      }, function (data) {
        console.log(data);
      })
        .done(function () {
          $(location).attr('href', 'http://localhost:3000');
        });
  }
}
