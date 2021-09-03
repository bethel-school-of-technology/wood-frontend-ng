import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { EventspageComponent } from "./pages/examples/eventspage/eventspage.component";
import { WatercoolerpageComponent } from "./pages/examples/watercoolerpage/watercoolerpage.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "register", component: RegisterpageComponent },
  { path: "landing", component: LandingpageComponent },
  { path: "events", component: EventspageComponent},
  { path: "watercooler", component: WatercoolerpageComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: []
})
export class AppRoutingModule {}
