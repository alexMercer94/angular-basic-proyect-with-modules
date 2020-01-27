import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountsComponent } from "./dashboard/accounts/accounts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    // * first path MUST be empty to avoid repetition: main/main
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        redirectTo: "accounts"
      },
      {
        path: "accounts",
        component: AccountsComponent
      },
      {
        path: "**",
        redirectTo: "landing"
      }
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
