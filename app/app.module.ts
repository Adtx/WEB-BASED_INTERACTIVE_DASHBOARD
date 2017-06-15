import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { GridComponent } from './home/grid/grid.component';

import { GridModule } from './home/grid/grid.module';
import { SidebarModule } from './home/sidebar/sidebar.module';
import { FooterModule } from './home/footer/footer.module';
import { NavbarModule} from './home/navbar/navbar.module';
import { NgGridModule } from 'angular2-grid';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { WidgetContainerComponent } from './home/grid/widgetContainer/widgetContainer.component';
import { TwitterComponent } from './home/grid/twitter/twitter.component';
import { ClockComponent } from './home/grid/clock/clock.component';

import { BarChartComponent } from './home/grid/barChart/barChart.component';
import { LineChartComponent } from './home/grid/LineChart/lineChart.component';
import { DoughnutChartComponent } from './home/grid/DoughnutChart/doughnutChart.component';
import { PieChartComponent } from './home/grid/PieChart/pieChart.component';
import { PolarAreaChartComponent } from './home/grid/PolarAreaChart/polarAreaChart.component';
import { RadarChartComponent } from './home/grid/RadarChart/radarChart.component';
import { ChartsModule } from 'ng2-charts';
import {ChartDataService} from './services/chart.data.service';
import {BackendService} from './services/backend.service';
import {SharedService} from './services/shared.service';

import {FormsModule} from '@angular/forms';

import {LoginComponent} from'./login/login.component';
import {HomeComponent} from'./home/home.component';

import { MODULE_ROUTES } from './app.routes';

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        FormsModule,
        GridModule,
        SidebarModule,
        NavbarModule,
        NgGridModule,
        FooterModule,
        ChartsModule,
        RouterModule.forRoot(MODULE_ROUTES)
    ],
    
    declarations: [ HomeComponent, LoginComponent, AppComponent, GridComponent, TwitterComponent, ClockComponent, WidgetContainerComponent,
                    BarChartComponent, LineChartComponent, DoughnutChartComponent, PieChartComponent,
                    PolarAreaChartComponent, RadarChartComponent
                  ],
    providers: [ChartDataService, BackendService, SharedService],
    entryComponents: [TwitterComponent, ClockComponent, BarChartComponent, LineChartComponent, DoughnutChartComponent,
                      PieChartComponent, PolarAreaChartComponent, RadarChartComponent
                     ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
