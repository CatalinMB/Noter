import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Http, Response, URLSearchParams } from '@angular/http';
import {User} from './user';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  private registerForm: FormGroup;

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmitRegister(registerForm) {


    const data : User = registerForm.value;


    if (registerForm.valid) {

      this.http
        .post('http://localhost:3000/signup', data)
        .subscribe(res => console.log(res.json())
          , error => {
            console.log(error.json());
          });

          console.log(data , ' dataaa');

      // How to navigate in typescript code.
      this.router.navigate(['login']);


      // this.router.navigate(['contact']); // Navigate
    } else {
      // Show errors and not send a request.
      alert('Fill out the fields, dummy! ')
    }
  }

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private http: Http) { }

  ngOnInit() {
    this.createForm();
  }

  // onSubmit(event){
  //     event.preventDefault();

  //     let semail = $("#semail-field").val();
  //     let susername = $("#susername-field").val();
  //     let spassword = $("#spassword-field").val();

  //     $.post("http://localhost:3000/signup", {
  //       email: semail,
  //       username: susername,
  //       password: spassword
  //     }, function (data) {
  //       console.log(data);
  //     })
  //       .done(function () {
  //         $(location).attr('href', 'http://localhost:3000');
  //       });
  // }
}
