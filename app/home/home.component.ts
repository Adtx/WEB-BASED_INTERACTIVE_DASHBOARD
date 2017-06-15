import { Component, OnInit, ViewChild, Type} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BarChartComponent } from './grid/barChart/barChart.component';
import { LineChartComponent } from './grid/LineChart/lineChart.component';
import { DoughnutChartComponent } from './grid/DoughnutChart/doughnutChart.component';
import { PieChartComponent } from './grid/PieChart/pieChart.component';
import { PolarAreaChartComponent } from './grid/PolarAreaChart/polarAreaChart.component';
import { RadarChartComponent } from './grid/RadarChart/radarChart.component';
import { TwitterComponent } from './grid/twitter/twitter.component';
import { ClockComponent } from './grid/clock/clock.component';
import {BackendService} from '../services/backend.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'home-cmp',
    template: `
        <div class="wrapper">
    <div class="sidebar" data-color="blue" data-image="">
        <sidebar-cmp (newWidget)="addWidget($event)"></sidebar-cmp>
        <div class="sidebar-background" style="background-image: url(/assets/img/sidebar-4.jpg)"></div>
    </div>

    <navbar-cmp (save)="saveSession()" class="navbar-cmp-fixed"></navbar-cmp>


    <div class="main-panel">
        
        <grid-cmp #grid></grid-cmp>
        <div>
            <footer-cmp></footer-cmp>
        </div>
    </div>
</div>

    `
})

export class HomeComponent{
    location: Location;
    username: string = 'USER';
    @ViewChild('grid') grid;

    private static stringTypeMap: {[string:string]: Type<Component>} = {
        'linechart': LineChartComponent,
        'barchart': BarChartComponent,
        'doughnutchart': DoughnutChartComponent,
        'piechart': PieChartComponent,
        'polarareachart': PolarAreaChartComponent,
        'radarchart': RadarChartComponent,
        'clock': ClockComponent,
        'twitter': TwitterComponent
    };

    constructor(private http: Http, location:Location, private service: BackendService) {
        this.location = location;
        this.username = localStorage.getItem('username');
    }

    ngOnInit(){ // Obter do back-end a configuração do utilizador
        //$.getScript('../assets/js/light-bootstrap-dashboard.js');

          this.http.get(`http://pcogdashboard.azurewebsites.net/api/DashboardsFetch/${this.username}/dash0`)
            .map((response: Response) => <any[]>response.json())
            .subscribe(array => {
                for(let widget of array){
                    widget.widgetType = HomeComponent.stringTypeMap[widget.widgetType];
                    this.grid.boxes.push(widget);
                }
            });
    }


    private saveSession(): void {

       this.service.saveUserSession(this.grid.boxes, this.username)
				.subscribe( res => {},
							error => console.log(error));

        //console.log('SESSION SAVED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');    
    }
    
    private addWidget(widgetType: Component): void {
        this.grid.addBox(widgetType);
    }


    private handleErrorObservable (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.message || error);
    }

    public isMaps(path){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        if(path === titlee){
            return true;
        }
        else {
            return false;
        }
    }
}
