import { Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

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

export class HomeComponent implements OnInit{
    location: Location;
    @ViewChild('grid') dashboard;

    constructor(location:Location) {
        this.location = location;
    }

    ngOnInit(){
        $.getScript('../assets/js/light-bootstrap-dashboard.js');
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
