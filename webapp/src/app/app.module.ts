import {SquarePaymentResultComponent} from './payment/square-payment-result/square-payment-result.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MaterialModule} from './material.module';
import {KaocHistoryComponent} from './static/about/kaoc-history/kaoc-history.component';
import {KaocByeLawComponent} from './static/about/kaoc-bye-law/kaoc-bye-law.component';
import {MainContentAreaComponent} from './main-content-area/main-content-area.component';
import {LeftFrameComponent} from './main-content-area/left-frame/left-frame.component';
import {RightFrameComponent} from './main-content-area/right-frame/right-frame.component';
import {ContentFrameComponent} from './main-content-area/content-frame/content-frame.component';
import {HomeComponent} from './common/home/home.component';
import {MadhuramMalayalamComponent} from './activities/madhuram-malayalam/madhuram-malayalam.component';
import {EditMemberComponent} from './membership/edit-member/edit-member.component';
import {AngularFireFunctionsModule, FUNCTIONS_ORIGIN} from '@angular/fire/functions';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {SecuredModule} from './secured/secured.module';
import {SpinnerComponent} from './common/spinner/spinner.component';
import {CdkStepper} from '@angular/cdk/stepper';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import * as $ from 'jquery';
import {AppLayoutComponent} from './_layout/app-layout/app-layout.component';
import {SiteHeaderComponent} from './_layout/site-header/site-header.component';
import {SiteFooterComponent} from './_layout/site-footer/site-footer.component';

export function getAppName() {
  return 'KAOC';
}

@NgModule({
  declarations: [
    AppComponent,
    KaocHistoryComponent,
    KaocByeLawComponent,
    MainContentAreaComponent,
    LeftFrameComponent,
    RightFrameComponent,
    ContentFrameComponent,
    HomeComponent,
    MadhuramMalayalamComponent,
    EditMemberComponent,
    SquarePaymentResultComponent,
    SpinnerComponent,
    AppLayoutComponent,
    SiteHeaderComponent,
    SiteFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MaterialModule,
    AngularFireFunctionsModule,
    SecuredModule,
    AppRoutingModule,
    NgxSpinnerModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase,
      getAppName,
      {
        enableFirestoreSync: false,
        toastMessageOnAuthSuccess: false,
        toastMessageOnAuthError: false,
        passwordMinLength: 8,
        passwordMaxLength: 16
      }),
    MatPasswordStrengthModule
  ],
  entryComponents: [EditMemberComponent, SpinnerComponent],
  providers: [{
    provide: CdkStepper,
    useValue: undefined
  }, {
    provide: FUNCTIONS_ORIGIN,
    useValue: environment.firebase.functionURL
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
