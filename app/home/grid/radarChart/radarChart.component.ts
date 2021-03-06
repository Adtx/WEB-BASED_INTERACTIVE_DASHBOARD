import { Component, OnDestroy, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {ChartDataService} from '../../../services/chart.data.service';
 
@Component({
    moduleId: module.id,
    selector: 'radarChart-cmp',
    templateUrl: 'radarChart.component.html'
})
export class RadarChartComponent implements OnDestroy, OnInit{
  // Radar
  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
 
  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    //{data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType:string = 'radar';
  private closeConfigWindow:boolean = false;
  private service: ChartDataService;
  @Input() title: string;
  @Input() widgetID: number;
  @Input() serviceURL: string;
  @Output() update = new EventEmitter();


  public constructor(){this.service = new ChartDataService();}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    if(this.serviceURL) this.connectToService(this.serviceURL); 
  }

  private connectToService(serviceURL: string){

    this.closeConfigWindow = true;
    if(serviceURL != undefined && serviceURL != ""){
      this.service.connect(serviceURL);

      this.service.getObservableData().subscribe(newValue => {
      // for(let i=0; i<this.lineChartData.length;i++)

          this.radarChartData[0].data.push(parseInt(newValue));
          this.radarChartData[0].data.shift();
          this.radarChartData = this.radarChartData.slice(0);
      });
      this.serviceURL = serviceURL;
    }
  }

  private updateConfig(serviceURL: string) {
    this.connectToService(serviceURL);
    this.update.emit({id: this.widgetID, title: this.title, url: serviceURL});
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.service.closeConnection(this.serviceURL);
  }

  // events
  public chartClicked(e:any):void {  }
  
  public chartHovered(e:any):void {  }
}