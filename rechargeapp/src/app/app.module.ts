import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RechargeComponent } from './recharge/recharge.component';
import { PlansComponent } from './plans/plans.component';
import { FormsModule } from '@angular/forms';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { PaymentComponent } from './payment/payment.component';
import { DebitcardComponent } from './debitcard/debitcard.component';
import { UpiComponent } from './upi/upi.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    RechargeComponent,
    PlansComponent,
    PrepaidComponent,
    PostpaidComponent,
    PaymentComponent,
    DebitcardComponent,
    UpiComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
