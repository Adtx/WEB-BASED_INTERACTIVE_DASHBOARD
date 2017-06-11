import { Component} from '@angular/core';
import {ChartDataService} from '../../../services/chart.data.service';
 
@Component({
    moduleId: module.id,
    selector: 'radarChart-cmp',
    templateUrl: 'radarChart.component.html'
})
export class RadarChartComponent {
  // Radar
  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
 
  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    //{data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType:string = 'radar';
  
   public constructor(private service: ChartDataService){
    //this.service = new ChartDataService();
    service.getObservableData().subscribe(newValue => {
     // for(let i=0; i<this.lineChartData.length;i++)

        this.radarChartData[0].data.push(parseInt(newValue));
        this.radarChartData[0].data.shift();
        this.radarChartData = this.radarChartData.slice(0);
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