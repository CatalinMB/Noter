import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  constructor(private myRoute: Router) { }

  logged = false;

  set isLoggedIn(_log: boolean){
    this.logged = _log;
    this.myRoute.navigate(['/welcome']);
  }
  get isLoggedIn() {
    return this.logged;
  }

  // get isSuperAdmin() {
  //   return true;
  // // }
  // logout() {
  //   localStorage.removeItem("LoggedInUser");
  //   this.myRoute.navigate(["/login"]);
  // }
}