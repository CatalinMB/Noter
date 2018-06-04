import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-logout',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: []
})

export class LogoutComponent implements OnInit {

    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit() {
        this.auth.isLoggedIn = false;
        sessionStorage.removeItem('token');
        this.router.navigate(['login']);
    }

}