import { Component } from '@angular/core';
import {ChartDataService} from '../../../services/chart.data.service';
 
@Component({
  moduleId: module.id,
  selector: 'barChart-cmp',
  templateUrl: 'barChart.component.html'
})
export class BarChartComponent {
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

  public constructor(private service: ChartDataService){
    //this.service = new ChartDataService();
    service.getObservableData().subscribe(newValue => {
     // for(let i=0; i<this.lineChartData.length;i++)
     
        this.barChartData[0].data.push(newValue);
        this.barChartLabels = this.barChartLabels.map((label) => {return label;}); // Sem esta linha a view so atualiza quando entra no if

        if(this.barChartData[0].data.length > this.barChartLabels.length){ // Se o numero atual de pontos ja nao cabe no grafico, faz scroll
          this.barChartData[0].data.shift();
          this.barChartLabels = this.barChartLabels.map((label) => {return (parseInt(label)+1).toString();});
        }
    });
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}