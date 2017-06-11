import { Route } from '@angular/router';

import { GridComponent } from './home/grid/grid.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';


export const MODULE_ROUTES: Route[] =[
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'index', component: AppComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    
]