import { Component} from '@angular/core';
import {ChartDataService} from '../../../services/chart.data.service';
 
@Component({
    moduleId: module.id,
    selector: 'pieChart-cmp',
    templateUrl: 'pieChart.component.html'
})
export class PieChartComponent {
  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';
 
   public constructor(private service: ChartDataService){
    //this.service = new ChartDataService();
    service.getObservableData().subscribe(newValue => {
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
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}