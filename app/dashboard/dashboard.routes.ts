import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const MODULE_ROUTES: Route[] =[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]