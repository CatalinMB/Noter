import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Http, Response, URLSearchParams } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private auth: AuthService,
    private router: Router, private http: Http) { }

  private loginForm: FormGroup;


  onSubmitLogin(loginForm) {

    const data = {
      'email': loginForm.get('email').value,
      'password': loginForm.get('password').value
    };

    console.log('email  ', loginForm.email);
    console.log('the userrr ', data);

    if (loginForm.valid) {

      this.http
        .post('http://localhost:3000/login', data)
        .subscribe((res) => {
          console.log('res jsonn  ', res.json());
          console.log('res simpluu ', res);
          sessionStorage.setItem('user', res.json().user.email)
        }
          , error => {
            console.log(error.json());
          });

      this.auth.isLoggedIn = true;
      // How to navigate in typescript code.
      this.router.navigate(['/welcome']);
      console.log("heyy am ajunss");


      // this.router.navigate(['contact']); // Navigate
    } else {
      // Show errors and not send a request.
      alert('Fill out the fields, dummy! ');
    }
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    console.log('formmm  ', this.loginForm.value);
  }

  ngOnInit() {
    this.createForm();
  }


  // onSubmit(event) {

  //   event.preventDefault();

  //   const logemail = $('#email-field').val();
  //   const logpassword = $('#password-field').val();
  //   console.log(logemail, ' ', logpassword);
  //   console.log('i am here');

  //   if (!logemail) {
  //     $('#emailError').css('visibility', 'visible');
  //   } else {
  //     if (!logpassword) {
  //       $('#passwordError').css('visibility', 'visible');
  //     } else {
  //       $.post('http://localhost:3000/login', { email: logemail, password: logpassword }, function (data) {
  //         console.log(data);
  //       })
  //         .done(() => {
  //           this.auth.isLoggedIn = true;
  //           sessionStorage.setItem('token', 'Logged in');
  //           $('#emailError').css('visibility', 'hidden');
  //           $('#passwordError').css('visibility', 'hidden');
  //         });
  //     }
  //   }
  // }
}
