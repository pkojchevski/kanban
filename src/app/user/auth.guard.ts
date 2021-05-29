import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { SnackService } from '../services/snack.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private snack: SnackService,
              private auth:AuthService) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    
    const user = await this.auth.isAuth().toPromise()
    const isLoggedIn = !!user
    console.log('wshat?', isLoggedIn)
    if(!isLoggedIn) {
      this.snack.authError()
    } 
      return isLoggedIn;
  }
  
}
