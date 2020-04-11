import { Component, OnInit } from '@angular/core';
import { AuthService, UserInfoExt } from '../auth/auth.service';
import { Member } from '../Member';
import { AngularFireFunctions } from '@angular/fire/functions';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    firebaseUser: UserInfoExt;
    kaocUser: Member;
    EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    // possible values something in lines of - maybe an enum?
    // loading,
    // kaocUserNotFound,
    // kaocUserFound,
    // kaocUserLinkEmailSent
    profileState = 'loading';
    emailIdToLink: string;
    validEmailIdToLink = false;

    constructor(
      private authService: AuthService,
      private fns: AngularFireFunctions,
      private snackBar: MatSnackBar) {
      authService.firebaseUser.subscribe(firebaseUser => {
          if (firebaseUser) {
              this.firebaseUser = firebaseUser;
          }
      });

      authService.kaocUser.subscribe(kaocUser => {
          if (kaocUser) {
              this.profileState = 'kaocUserFound';
              this.kaocUser = kaocUser;
          } else {
              this.profileState = 'kaocUserNotFound';
          }
      });
    }

    setEmailIdToLink(value) {
        this.emailIdToLink = value;
        this.validEmailIdToLink = this.EMAIL_REGEXP.test(value);
    }

    linkWithOtherEmail(email: string): void {
      if(this.EMAIL_REGEXP.test(email)) {
          this.fns.httpsCallable('requestEmailProfileLinking')({
            emailId: email
          }).toPromise().then(success => {
            this.profileState = 'kaocUserLinkEmailSent';
          }).catch(e => {
            this.snackBar.open('Failed to request profile linking ' + e.message);
          });
      } else {
        this.snackBar.open('Invalid Email Id.', null, {duration: 5000});
      }
    }

    createNewProfile(): void {
        // TODO - Call service
        // then show success (using snackBar?)
        // and wait for kaocUserProfile to be available (done above)
    }


    ngOnInit() {
    }
}
