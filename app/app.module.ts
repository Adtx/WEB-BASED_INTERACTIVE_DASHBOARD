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
//import { ChartComponent } from './dashboard/chart/chart.component';
import { TwitterComponent } from './dashboard/twitter/twitter.component';
import { BarChartComponent } from './dashboard/barChart/barChart.component';
import { LineChartComponent } from './dashboard/LineChart/lineChart.component';
import { DoughnutChartComponent } from './dashboard/DoughnutChart/doughnutChart.component';
import { PieChartComponent } from './dashboard/PieChart/pieChart.component';
import { PolarAreaChartComponent } from './dashboard/PolarAreaChart/polarAreaChart.component';
import { RadarChartComponent } from './dashboard/RadarChart/radarChart.component';
import { ChartsModule } from 'ng2-charts';
import {ChartDataService} from './services/chart.data.service';

@NgModule({
    imports:      [
        BrowserModule,
        DashboardModule,
        SidebarModule,
        NavbarModule,
        NgGridModule,
        FooterModule,
        ChartsModule,
        RouterModule.forRoot([])
    ],
    declarations: [ AppComponent, DashboardComponent, TwitterComponent, WidgetContainerComponent,
                    BarChartComponent, LineChartComponent, DoughnutChartComponent, PieChartComponent,
                    PolarAreaChartComponent, RadarChartComponent
                  ],
    providers: [ChartDataService],
    entryComponents: [TwitterComponent, BarChartComponent, LineChartComponent, DoughnutChartComponent,
                      PieChartComponent, PolarAreaChartComponent, RadarChartComponent
                     ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
