import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// import the auth service here
import { AuthService } from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate {
  // add the service we need
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // check if you get the token from the server
    if (sessionStorage.getItem('token') === 'Logged in') {
      return true;
    }
    // handle any redirects if a user isn't authenticated
    if (!this.auth.isLoggedIn) {
      // redirect the user
      this.router.navigate(['/login']);
      return false;
    }
  }
}