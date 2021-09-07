import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PricingComponent } from './pricing/pricing.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { WatercoolerComponent } from './home/watercooler/watercooler.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent,
    RegisterComponent,
    ContactComponent,
    WatercoolerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
