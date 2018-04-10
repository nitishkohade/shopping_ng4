import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './authService';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _AuthService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if ( this._AuthService.getUser()) {
        return true;
      } else {
        // return true;
         this.router.navigate(['login']);
      }
  }
}
