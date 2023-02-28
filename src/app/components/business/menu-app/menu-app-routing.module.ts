import { Routes, RouterModule } from '@angular/router';

import { MenuAppComponent } from "./menu-app.component";

export const routes: Routes = [
    {
        path: '',
        component: MenuAppComponent
    },
];

export const MenuAppRoutes = RouterModule.forRoot(routes);