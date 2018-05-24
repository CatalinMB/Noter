import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  constructor(private myRoute: Router) { }
  get isLoggedIn() {
    return true;
  }

  // get isSuperAdmin() {
  //   return true;
  // // }
  // logout() {
  //   localStorage.removeItem("LoggedInUser");
  //   this.myRoute.navigate(["/login"]);
  // }
}