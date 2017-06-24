import { Component, OnInit, ViewChild, Type} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
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

    constructor(private http: Http, location:Location, private service: BackendService, private router: Router) {
        this.location = location;
        this.username = localStorage.getItem('username');
    }

    ngOnInit(){ // Obter do back-end a configuração do utilizador
        //$.getScript('../assets/js/light-bootstrap-dashboard.js');

          this.http.get(`http://pcogdashboard.azurewebsites.net/api/DashboardsFetch/${this.username}/dash0`)
            .map((response: Response) => <any[]>response.json())
            .subscribe(array => {
                for(let widget of array){
                    this.grid.boxes.push(widget);
                }
            });
    }


    private saveSession(): void {

       this.service.saveUserSession(this.grid.boxes, this.username)
				.subscribe( res => {},
							error => console.log(error));

        //console.log('SESSION SAVED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

        this.router.navigate(['login']);
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
