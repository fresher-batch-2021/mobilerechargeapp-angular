import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';
import { RechargeComponent } from './recharge/recharge.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"login" ,component:LoginComponent},
  {path:"register" ,component:RegisterComponent},
  {path:"plans" ,component:PlansComponent},
  {path:"recharge" ,component:RechargeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
