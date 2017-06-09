import {Component, ViewEncapsulation} from '@angular/core';
import {NgGrid, NgGridItem, NgGridConfig, NgGridItemConfig, NgGridItemEvent} from 'angular2-grid';
//import { ChartComponent } from './chart/chart.component';
import { TwitterComponent } from './twitter/twitter.component';
import { ClockComponent } from './clock/clock.component';

interface Box {
    id: number;
    config: any;
	widgetType: Component;
}


@Component({
    moduleId: module.id,
    selector: 'dashboard-cmp',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class DashboardComponent{
    private boxes: Array<Box> = [];
	private rgb: string = '#efefef';
	private curNum = 1;
	private gridConfig: NgGridConfig = <NgGridConfig>{
		'margins': [5],
		'draggable': true,
		'resizable': true,
		'max_cols': 0,
		'max_rows': 0,
		'visible_cols': 0,
		'visible_rows': 0,
		'min_cols': 1,
		'min_rows': 1,
		'col_width': 1,
		'row_height': 2,
		'cascade': 'left',
		'min_width': 50,
		'min_height': 50,
		'fix_to_grid': true,
		'auto_style': true,
		'auto_resize': false,
		'maintain_ratio': false,
		'prefer_new': false,
		'zoom_on_drag': false,
		'limit_to_screen': true
	};
	private itemPositions: Array<any> = [];
	hello: string = 'hello\n';


	constructor() {
	}



	addBox(type: Component): void {
		const conf: NgGridItemConfig = this._generateDefaultItemConfig();
		conf.payload = this.curNum++;
		this.boxes.push({ id: conf.payload, config: conf, widgetType: type});
	}

	removeWidget(index: number): void {
		if (this.boxes[index]) {
			this.boxes.splice(index, 1);
			this.curNum--;
		}
	}

	updateItem(index: number, event: NgGridItemEvent): void {
		// Do something here
	}

	onDrag(index: number, event: NgGridItemEvent): void {
		// Do something here
	}

	onResize(index: number, event: NgGridItemEvent): void {
		// Do something here
	}

	private _generateDefaultItemConfig(): NgGridItemConfig {
		return { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 50, 'sizey': 30 };
	}

	private _generateDefaultDashConfig(): NgGridItemConfig[] {
		return [
		{ 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 },
		{ 'dragHandle': '.handle', 'col': 26, 'row': 1, 'sizex': 1, 'sizey': 1 },
		{ 'dragHandle': '.handle', 'col': 51, 'row': 1, 'sizex': 75, 'sizey': 1 },
		{ 'dragHandle': '.handle', 'col': 83, 'row': 26, 'sizex': 1, 'sizey': 1 }];
	}
}
