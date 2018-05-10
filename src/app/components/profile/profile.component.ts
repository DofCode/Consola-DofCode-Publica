import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public isLoggedIn: Boolean;
  public user_displayName: String;
  public user_photoURL: String;
  public user_email: String;
  public isCountdownInitialized: boolean;
  public constructor(public authService: AuthService, private router: Router, private el:ElementRef) {

    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_photoURL = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.user_photoURL = auth.google.photoURL;
          this.user_email = auth.google.email;
        }
      }
    );

   }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
