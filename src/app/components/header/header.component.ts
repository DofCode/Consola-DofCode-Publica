import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isLoggedIn: Boolean;
  public user_displayName: String;
  public user_photoURL: String;
  public constructor(public authService: AuthService, private router: Router, private el:ElementRef) {

    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_photoURL = '';
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.user_photoURL = auth.google.photoURL;
        }
      }
    );

   }
   ngOnInit() {

   }

}
