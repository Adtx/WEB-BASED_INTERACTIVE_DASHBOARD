import { Component} from '@angular/core';
import {ChartDataService} from '../../services/chart.data.service';

@Component({
  moduleId: module.id,
  selector: 'lineChart-cmp',
  templateUrl: 'lineChart.component.html',
})
export class LineChartComponent {
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


  //private nrOfPoints: number = 10;
  private serviceURL: string = 'ws://localhost:8080';

  public constructor(private service: ChartDataService){
    //this.service = new ChartDataService();
    this.service.getObservableData().subscribe(newValue => {
     // for(let i=0; i<this.lineChartData.length;i++)
     
        this.lineChartData[0].push(newValue);
        this.lineChartLabels = this.lineChartLabels.map((label) => {return label;}); // Sem esta linha a view so atualiza quando entra no if

        if(this.lineChartData[0].length > this.lineChartLabels.length){ // Se o numero atual de pontos ja nao cabe no grafico, faz scroll
          this.lineChartData[0].shift();
          this.lineChartLabels = this.lineChartLabels.map((label) => {return (parseInt(label)+1).toString();});
        }
    });
  }

  // Atualiza o chart (método da interface Observer)
  /*next(newValue){
    this.lineChartData = this.lineChartData.map((array) => {array.push(parseInt(newValue));return array;});
    if(this.lineChartData[0].length > this.nrOfPoints){
      this.lineChartData[0].shift();
      this.lineChartLabels = this.lineChartLabels.map((label) => {return (parseInt(label)+1).toString();});
    }
    this.ref.detectChanges(); 
    console.log(this.lineChartData[0]);
  }*/

  // Método da interface Observer
  //error(err: any){console.log(err);}

  // Método da interface Observer
  //complete(){console.log('Server down');}
 
  /*public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }*/

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}