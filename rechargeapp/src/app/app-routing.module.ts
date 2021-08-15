import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebitcardComponent } from './debitcard/debitcard.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { PlansComponent } from './plans/plans.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { RechargeComponent } from './recharge/recharge.component';
import { RegisterComponent } from './register/register.component';
import { UpiComponent } from './upi/upi.component';

const routes: Routes = [
  {path: "", redirectTo: "index", pathMatch: "full"},
  {path:"index", component: IndexComponent},
  {path:"login" ,component:LoginComponent},
  {path:"register" ,component:RegisterComponent},
  {path:"plans" ,component:PlansComponent},
  {path:"recharge" ,component:RechargeComponent},
  {path:"prepaid" ,component:PrepaidComponent},
  {path:"postpaid" ,component:PostpaidComponent},
  {path:"payment",component:PaymentComponent},
  {path:"debitcard" ,component:DebitcardComponent},
  {path:"upi" ,component:UpiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
