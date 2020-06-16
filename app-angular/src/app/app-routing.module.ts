import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from "@angular/common";
import { AngularComponent } from './angular/angular.component';

const routes: Routes = [
  {
    path: "angular",
    component: AngularComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }]
})
export class AppRoutingModule { }
