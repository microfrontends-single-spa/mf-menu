import { NgModule } from '@angular/core';
import { MenuAppRoutes } from './menu-app-routing.module';

import { MenuAppComponent } from './menu-app.component';
import { LogoComponent } from './logo/logo.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MenuAppComponent,
    LogoComponent
  ],
  imports: [
    MenuAppRoutes,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class MenuAppModule { }
