import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_ROUTES } from './dashboard.routes';

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: []
})

export class DashboardModule{}
