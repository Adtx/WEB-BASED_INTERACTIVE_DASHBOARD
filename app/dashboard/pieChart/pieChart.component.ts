import { Component } from '@angular/core';
 
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
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}