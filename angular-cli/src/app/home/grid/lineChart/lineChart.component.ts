import { Component, OnDestroy, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {ChartDataService} from '../../../services/chart.data.service';

@Component({
  moduleId: module.id,
  selector: 'lineChart-cmp',
  templateUrl: 'lineChart.component.html',
})
export class LineChartComponent implements OnDestroy, OnInit{
  // lineChart
  public lineChartData:Array<number[]> = [[]];
  public lineChartLabels:Array<any> = ['1','2','3','4','5','6','7','8','9','10'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';


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
      
          this.lineChartData[0].push(newValue);
          this.lineChartLabels = this.lineChartLabels.map((label) => {return label;}); // Sem esta linha a view so atualiza quando entra no if

          if(this.lineChartData[0].length > this.lineChartLabels.length){ // Se o numero atual de pontos ja nao cabe no grafico, faz scroll
            this.lineChartData[0].shift();
            this.lineChartLabels = this.lineChartLabels.map((label) => {return (parseInt(label)+1).toString();});
          }
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