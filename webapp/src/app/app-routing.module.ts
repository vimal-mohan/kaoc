import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {KaocHistoryComponent} from './static/about/kaoc-history/kaoc-history.component';
import {KaocByeLawComponent} from './static/about/kaoc-bye-law/kaoc-bye-law.component';
import {HomeComponent} from './common/home/home.component';
import {MadhuramMalayalamComponent} from './activities/madhuram-malayalam/madhuram-malayalam.component';
import {SquarePaymentResultComponent} from './payment/square-payment-result/square-payment-result.component';
import {AppLayoutComponent} from './_layout/app-layout/app-layout.component';
import {ProfileComponent} from './secured/profile/profile.component';
import {MemberProfileComponent} from './secured/admin/member-profile/member-profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  //// { path : 'madhuram-malayalam' , component: MadhuramMalayalamComponent}

  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {path: 'kaochistory', component: KaocHistoryComponent},
      {path: 'kaocbylaw', component: KaocByeLawComponent},
      {path: 'squareprocesspaymentresult', component: SquarePaymentResultComponent},
      {path: 'memberprofile', component: MemberProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
