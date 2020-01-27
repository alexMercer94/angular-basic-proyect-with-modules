import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AccountsComponent } from "./dashboard/accounts/accounts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MainRoutingModule } from "./main-routing.module";

@NgModule({
  declarations: [DashboardComponent, AccountsComponent],
  imports: [CommonModule, MainRoutingModule],
  exports: [DashboardComponent, AccountsComponent]
})
export class MainModule {}
