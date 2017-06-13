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
  private closeConfigWindow:boolean = false;
  private service: ChartDataService;
  private serviceURL: string;
  private title: string;


  public constructor(){this.service = new ChartDataService();}


  private connectToService(serviceURL: string){

    this.closeConfigWindow = true;

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

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.service.closeConnection(this.serviceURL);
  }

  // events
  public chartClicked(e:any):void {  }
  
  public chartHovered(e:any):void {  }
}