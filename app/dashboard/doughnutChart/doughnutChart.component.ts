import { Component } from '@angular/core';
 
@Component({
    moduleId: module.id,
    selector: 'doughnutChart-cmp',
    templateUrl: 'doughnutChart.component.html'
})
export class DoughnutChartComponent {
  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}