import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.get("http://localhost:3000/profile", function (data) {
        $("#usernameSpace").text(data.username);
    });
  }

}
