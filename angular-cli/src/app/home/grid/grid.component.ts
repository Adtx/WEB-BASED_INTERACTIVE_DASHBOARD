import {Component, ViewEncapsulation, Type} from '@angular/core';
import {NgGrid, NgGridItem, NgGridConfig, NgGridItemConfig, NgGridItemEvent} from 'angular2-grid';
import { TwitterComponent } from './twitter/twitter.component';
import { ClockComponent } from './clock/clock.component';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {BackendService} from '../../services/backend.service';

interface Box {
    id: number;
	title: any,
	url: any,
    config: any;
	widgetType: Component;
}


@Component({
    moduleId: module.id,
    selector: 'grid-cmp',
    templateUrl: 'grid.component.html',
    styleUrls: ['grid.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class GridComponent{
    public boxes: Array<Box> = [];
	private rgb: string = '#efefef';
	private curNum = 0;
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
		'min_width': 20,
		'min_height': 20,
		'fix_to_grid': false,
		'auto_style': true,
		'auto_resize': false,
		'maintain_ratio': false,
		'prefer_new': false,
		'zoom_on_drag': false,
		'limit_to_screen': true
	};
	private itemPositions: Array<any> = [];


	constructor(private http: Http, private service: BackendService) {
	}



	addBox(type: string): void {
		const conf: NgGridItemConfig = this._generateDefaultItemConfig();
		conf.payload = this.curNum++;
		this.boxes.push({ 'id': conf.payload, 'title': undefined, 'url': undefined, 'config': conf, 'widgetType': type});
	}

	removeWidget(index: number): void {
		if (this.boxes[index]) {
			this.boxes.splice(index, 1);
			if(this.curNum > 0) this.curNum--;
		}
	}

	updateItem(index: number, event: NgGridItemEvent): void {
		// Do something here
	}

	updateWidgetConfig(data: any): void {

		console.log('DADOS DE CONFIGURACAO RECEBIDOS:');
		console.log(data);

		this.boxes[data.id].title = data.title;
		this.boxes[data.id].url = data.url;

		console.log('ID DA WIDGET: ' + data.id);
		console.log('WIDGET CONFIG:');
		console.log(JSON.stringify(this.boxes[data.id]));
	}

	updateItemPosition(index: number, event: NgGridItemEvent): void {
		this.boxes[index].config.col = event.col;
		this.boxes[index].config.row = event.row;
	}

	updateItemSize(index: number, event: NgGridItemEvent): void {
		this.boxes[index].config.sizex = event.sizex;
		this.boxes[index].config.sizey = event.sizey;
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

	 /*teste(){

		this.service.saveUserSession(this.boxes)
				.subscribe( res => {},
							error => console.log(error));

			let headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
        	let options = new RequestOptions({ headers: headers });

			this.http.delete('http://pcogdashboard.azurewebsites.net/api/DashboardDelete/user5/dash6');
			this.http.delete('http://pcogdashboard.azurewebsites.net/api/DashboardDelete/user5/dash7');
			this.http.delete('http://pcogdashboard.azurewebsites.net/api/DashboardDelete/user5/dash6')
					 .subscribe(asfd => {});
    }*/
}