import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app'

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  @HostListener('click')
 async onclick() {
    const resp = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    if(resp?.user?.uid) {
      this.router.navigateByUrl('/kanban')
    }
  }
}
