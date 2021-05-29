import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }


  isAuth():Observable<any> {
    return this.afAuth.authState.pipe(first());
  }

  async logout() {
    await this.afAuth.signOut()
    this.router.navigateByUrl('/login')
  }
}
