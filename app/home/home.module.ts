import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HomeComponent }   from './home.component';
import { GridComponent } from './grid/grid.component';

import { GridModule } from './grid/grid.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './footer/footer.module';
import { NavbarModule} from './navbar/navbar.module';
import { NgGridModule } from 'angular2-grid';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
//import { ChartComponent } from './grid/chart/chart.component';
import { TwitterComponent } from './grid/twitter/twitter.component';
import { ClockComponent } from './grid/clock/clock.component';

import { BarChartComponent } from './grid/barChart/barChart.component';
import { LineChartComponent } from './grid/LineChart/lineChart.component';
import { DoughnutChartComponent } from './grid/DoughnutChart/doughnutChart.component';
import { PieChartComponent } from './grid/PieChart/pieChart.component';
import { PolarAreaChartComponent } from './grid/PolarAreaChart/polarAreaChart.component';
import { RadarChartComponent } from './grid/RadarChart/radarChart.component';
import { ChartsModule } from 'ng2-charts';
import {ChartDataService} from '../services/chart.data.service';


import { MODULE_ROUTES } from '../app.routes';

@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        SidebarModule,
        NavbarModule,
        NgGridModule,
        FooterModule,
        ChartsModule,
        //RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [ HomeComponent, GridComponent, TwitterComponent, ClockComponent,
                    BarChartComponent, LineChartComponent, DoughnutChartComponent, PieChartComponent,
                    PolarAreaChartComponent, RadarChartComponent
                  ],
    providers: [ChartDataService],
    entryComponents: [TwitterComponent, ClockComponent, BarChartComponent, LineChartComponent, DoughnutChartComponent,
                      PieChartComponent, PolarAreaChartComponent, RadarChartComponent
                     ],
    bootstrap:    [ HomeComponent ]
})
export class HomeModule { }
