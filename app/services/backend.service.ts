import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { BarChartComponent } from '../home/grid/barChart/barChart.component';
import { LineChartComponent } from '../home/grid/LineChart/lineChart.component';
import { DoughnutChartComponent } from '../home/grid/DoughnutChart/doughnutChart.component';
import { PieChartComponent } from '../home/grid/PieChart/pieChart.component';
import { PolarAreaChartComponent } from '../home/grid/PolarAreaChart/polarAreaChart.component';
import { RadarChartComponent } from '../home/grid/RadarChart/radarChart.component';

@Injectable()
export class BackendService {

    constructor(private http:Http) { }

    
    saveUserSession(boxes: any[]): Observable<any> {

        let widgets: string = '[';
		let type: string;
		let widget: {};

        for(let box of boxes){
            if(box.widgetType === LineChartComponent) type='linechart';
            else if(box.widgetType === BarChartComponent) type='barchart';
            else if(box.widgetType === DoughnutChartComponent) type='doughnutchart';
            else if(box.widgetType === PieChartComponent) type='piechart';
            else if(box.widgetType === PolarAreaChartComponent) type='polarareachart';
            else if(box.widgetType === RadarChartComponent) type='radarchart';
			widget = { id: box.id, config: box.config, widgetType: type};
            widgets = widgets.concat(JSON.stringify(widget)).concat(',');
        }
		widgets = widgets.slice(0,-1).concat(']');

        let data = {
            UserId:"userName",
            DashBoardId:"dashboard1",
            DashboardValue: widgets
        }

	    let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://pcogdashboard.azurewebsites.net/api/DashboardSave', JSON.stringify(data), options)
                   .map(this.extractData)
                   .catch(this.handleErrorObservable);

    }
	

    private extractData(res: Response) {
	let body = res.json();
        return body;
    }


    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }


    private handleErrorPromise (error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }	
} 