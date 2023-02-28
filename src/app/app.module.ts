import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuAppModule } from './components/business/menu-app/menu-app.module';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { MenuAppService } from './services/business/menu-app.service';
import { reducerForRoot } from './store';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuAppModule,
    StoreModule.forRoot(reducerForRoot)
  ],
  providers: [MenuAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
