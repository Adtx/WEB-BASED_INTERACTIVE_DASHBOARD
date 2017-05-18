import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { NgGridModule } from 'angular2-grid';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { WidgetContainerComponent } from './dashboard/widgetContainer/widgetContainer.component';
import { ChartComponent } from './dashboard/chart/chart.component';
import { TwitterComponent } from './dashboard/twitter/twitter.component';

@NgModule({
    imports:      [
        BrowserModule,
        DashboardModule,
        SidebarModule,
        NavbarModule,
        NgGridModule,
        FooterModule,
        RouterModule.forRoot([])
    ],
    declarations: [ AppComponent, DashboardComponent, ChartComponent, TwitterComponent, WidgetContainerComponent],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    entryComponents: [ChartComponent, TwitterComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
