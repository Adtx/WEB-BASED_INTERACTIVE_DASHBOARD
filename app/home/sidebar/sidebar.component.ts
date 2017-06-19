import { Component, OnInit, EventEmitter, Output, Type} from '@angular/core';
import { ITEMS, SUBITEMS, ROUTES } from './sidebar-items.config';
import { MenuType } from './sidebar.metadata';

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
   
    public routerItems: any[];
    public menuItems: any[];
    public displayChartTypes: boolean = false;
    public subMenuItems: any[];
    isCollapsed = true;
    @Output() newWidget = new EventEmitter<string>();

    constructor() {}

    ngOnInit() {
        this.menuItems = ITEMS.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
        this.subMenuItems = SUBITEMS;

        this.routerItems = ROUTES.filter(menuItem => menuItem);
    }

    public get menuIcon(): string {
        return this.isCollapsed ? '☰' : '✖';
    }

    public getMenuItemClasses(menuItem: any) {
        return {
            'pull-xs-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
        };
    }

    private triggerEvent(widgetType: string) : void {
        this.newWidget.emit(widgetType);
    }
}
