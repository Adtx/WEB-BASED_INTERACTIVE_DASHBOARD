import { Component } from '@angular/core';
import {ChartDataService} from '../../services/chart.data.service';
 
@Component({
    moduleId: module.id,
    selector: 'doughnutChart-cmp',
    templateUrl: 'doughnutChart.component.html'
})
export class DoughnutChartComponent {
  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [1,2,3];
  public doughnutChartType:string = 'doughnut';
 
   public constructor(private service: ChartDataService){
    //this.service = new ChartDataService();
    service.getObservableData().subscribe(newValue => {
     // for(let i=0; i<this.lineChartData.length;i++)
     
        //this.zone.run(() => {
          this.doughnutChartData.push(parseInt(newValue));
          this.doughnutChartData.shift();
          this.doughnutChartData = this.doughnutChartData.slice(0);
        //});

        /*if(this.doughnutChartData.length == this.doughnutChartLabels.length){
          this.zone.run(() => {
            this.doughnutChartData = this.doughnutChartData.slice(0);
            this.doughnutChartData.length = 0;
          });
        }*/
    });
  }


  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}