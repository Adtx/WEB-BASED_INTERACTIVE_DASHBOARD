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

<navbar-cmp  class="navbar-cmp-fixed">
</navbar-cmp>


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
    @ViewChild('grid') grid;

    private static stringTypeMap: {[string:string]: Type<Component>} = {
        'linechart': LineChartComponent,
        'barchart': BarChartComponent,
        'doughnutchart': DoughnutChartComponent,
        'piechart': PieChartComponent,
        'polarareachart': PolarAreaChartComponent,
        'radarchart': RadarChartComponent
    };

    constructor(private http: Http, location:Location, private service: BackendService) {
        this.location = location;
    }

    ngOnInit(){ // Obter do back-end a configuração do utilizador
        //$.getScript('../assets/js/light-bootstrap-dashboard.js');

          /*this.http.get('http://pcogdashboard.azurewebsites.net/api/DashboardsList/user5')
            .map((response: Response) => <any[]>response.json())
            .subscribe(array => {
                let widgets: any[]=array;
                if(widgets)
                        for(let widget of widgets){
                            widget.widgetType = HomeComponent.stringTypeMap[widget.widgetType];
                            this.grid.boxes.push(widget);
                        }
            });*/
    }


    private saveSession(): void {


       console.log('SESSION SAVED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
       
       this.service.saveUserSession(this.grid.boxes)
				.subscribe( res => {},
							error => console.log(error));
        
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
