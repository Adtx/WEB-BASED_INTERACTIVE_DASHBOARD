import { Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { ITEMS, SUBITEMS, ROUTES } from './home/sidebar/sidebar-items.config';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit{
    location: Location;
    @ViewChild('grid') dashboard;

    public routerItems: any[];

    constructor(location:Location) {
        this.location = location;
    }

    ngOnInit(){
        $.getScript('../assets/js/light-bootstrap-dashboard.js');
        this.routerItems = ROUTES.filter(menuItem => menuItem);
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

    private addWidget(widgetType: Component): void {
        this.dashboard.addBox(widgetType);
    }
}
