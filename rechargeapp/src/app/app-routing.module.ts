import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { RechargeComponent } from './recharge/recharge.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"login" ,component:LoginComponent},
  {path:"register" ,component:RegisterComponent},
  {path:"plans" ,component:PlansComponent},
  {path:"recharge" ,component:RechargeComponent},
  {path:"prepaid" ,component:PrepaidComponent},
  {path:"postpaid" ,component:PostpaidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
