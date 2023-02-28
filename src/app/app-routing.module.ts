import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAppComponent } from './components/business/menu-app/menu-app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  {
    path: "**", 
    component: MenuAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: "/"}]
})
export class AppRoutingModule { }
