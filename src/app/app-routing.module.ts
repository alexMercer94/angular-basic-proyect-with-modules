import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "landing",
    pathMatch: "full"
  },
  {
    path: "landing",
    loadChildren: "../pages/landing/landing.module#LandingModule"
  },
  {
    path: "main",
    loadChildren: "../pages/main/main.module#MainModule"
  },
  {
    path: "**",
    redirectTo: "landing",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: "reload"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
