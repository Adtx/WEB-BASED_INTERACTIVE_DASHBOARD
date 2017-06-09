import { Route } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from '../app.component';


export const MODULE_ROUTES: Route[] =[
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'index', component: AppComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    
]

export const MODULE_COMPONENTS = [
    TypographyComponent,
    NotificationsComponent
]
