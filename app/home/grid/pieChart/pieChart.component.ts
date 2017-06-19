import { Component, OnDestroy, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {ChartDataService} from '../../../services/chart.data.service';
 
@Component({
    moduleId: module.id,
    selector: 'pieChart-cmp',
    templateUrl: 'pieChart.component.html'
})
export class PieChartComponent implements OnDestroy, OnInit{
  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';
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
      
          //this.zone.run(() => {
            this.pieChartData.push(parseInt(newValue));
            this.pieChartData.shift();
            this.pieChartData = this.pieChartData.slice(0);
          //});

          /*if(this.pieChartData.length == this.doughnutChartLabels.length){
            this.zone.run(() => {
              this.pieChartData = this.pieChartData.slice(0);
              this.pieChartData.length = 0;
            });
          }*/
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