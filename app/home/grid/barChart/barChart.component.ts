import { Component, OnDestroy, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {ChartDataService} from '../../../services/chart.data.service';
 
@Component({
  moduleId: module.id,
  selector: 'barChart-cmp',
  templateUrl: 'barChart.component.html'
})
export class BarChartComponent implements OnDestroy, OnInit{
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [], label: 'Series A'},
    //{data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  //private maxDataPoints: number = 7;
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
      
          this.barChartData[0].data.push(newValue);
          this.barChartLabels = this.barChartLabels.map((label) => {return label;}); // Sem esta linha a view so atualiza quando entra no if

          if(this.barChartData[0].data.length > this.barChartLabels.length){ // Se o numero atual de pontos ja nao cabe no grafico, faz scroll
            this.barChartData[0].data.shift();
            this.barChartLabels = this.barChartLabels.map((label) => {return (parseInt(label)+1).toString();});
          }
      });
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