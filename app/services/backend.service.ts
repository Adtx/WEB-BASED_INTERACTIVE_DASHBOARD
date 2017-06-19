import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class BackendService {

    constructor(private http:Http) { }

    
    saveUserSession(boxes: any[], username: string): Observable<any> {
        let widgets: string = '[';
        let type: string;
        let widget: {};

        for(let box of boxes){
            widgets = widgets.concat(JSON.stringify(box)).concat(',');
        }
        widgets = widgets.slice(0,-1).concat(']');

        let data = {
            UserId: username,
            DashBoardId:"dash0",
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