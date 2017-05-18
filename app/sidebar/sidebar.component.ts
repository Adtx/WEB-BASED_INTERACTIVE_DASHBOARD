import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { ITEMS } from './sidebar-items.config';
import { MenuType } from './sidebar.metadata';

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    isCollapsed = true;
    @Output() newWidget = new EventEmitter<Component>();

    constructor() {}

    ngOnInit() {
        this.menuItems = ITEMS.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
    }

    public get menuIcon(): string {
        return this.isCollapsed ? '☰' : '✖';
    }

    public getMenuItemClasses(menuItem: any) {
        return {
            'pull-xs-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
        };
    }

    private triggerEvent(widgetType: Component) : void {
        this.newWidget.emit(widgetType);
    }
}
