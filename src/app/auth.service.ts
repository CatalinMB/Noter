import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  constructor(private myRoute: Router) { }

  private logged = false;

  set isLoggedIn(_log: boolean) {
    this.logged = _log;
    this.myRoute.navigate(['/welcome']);
  }
  get isLoggedIn() {
    return this.logged;
  }
  isLogged() {
    return this.logged;
  }
}