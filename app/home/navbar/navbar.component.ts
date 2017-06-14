import { Component, EventEmitter, Output} from '@angular/core';
import { MenuType } from '../sidebar/sidebar.metadata';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent{
    private listTitles: any[];
    location: Location;
    @Output() save = new EventEmitter();

    constructor(location:Location) {
        this.location = location;
    }

    getTitle(){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if(titlee.charAt(0) === '#'){
            titlee = titlee.slice( 2 );
        }
        for(var item = 0; item < this.listTitles.length; item++){
            if(this.listTitles[item].path === titlee){
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }

     private triggerEvent() : void {
        this.save.emit();
        console.log('SAVE EVENT EMITTED');
    }
}
