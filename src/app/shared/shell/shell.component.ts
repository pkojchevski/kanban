import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators'
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  isAuth: boolean = false
  isHandset$ :Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
              .pipe(
                map(result => result.matches),
                shareReplay()
              )

  constructor(private breakpointObserver: BreakpointObserver, public auth: AuthService, private router: Router) {
   }

  ngOnInit() {
     this.auth.isAuth().subscribe(user => {
       console.log(user)
       if(!!user) {
         this.router.navigateByUrl('/kanban')
         this.isAuth = true;
       } else {
        this.router.navigateByUrl('/login')
       }
     })
  }

}
