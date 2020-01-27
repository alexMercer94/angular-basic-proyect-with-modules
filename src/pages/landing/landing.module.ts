import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LandingRoutingModule } from "./landing-routing.module";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LandingRoutingModule]
})
export class LandingModule {}
