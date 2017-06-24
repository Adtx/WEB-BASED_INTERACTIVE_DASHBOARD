import { Injectable } from '@angular/core';
import { Subject, Observer, Observable } from 'rxjs';
import {$WebSocket} from 'angular2-websocket/angular2-websocket';

export class ChartDataService {

  private ws: $WebSocket;
  private subject: Subject<any> = new Subject<any>();

  /*
    Uma vez que so e possivel ter uma conexao Websocket por cada webservice em simultaneo, as conexoes sao mantidas no
    map connections abaixo para serem partilhadas pelos varios graficos que se queiram ligar ao mesmo webservice
    Chave: url -> string que representa o url do webservice
    Valor: objeto que contem a conexao 'websocket' e um contador do numero de graficos atualmente a usar essa conexao
  */
  private static connections: {[url:string]:{websocket:$WebSocket;nrOfChartsUsing:number}} = {};

  //mock server url = 'ws://localhost:8080'

  public constructor(){}



  public connect(serverUrl: string): void{

    if(ChartDataService.connections[serverUrl])
      this.ws = ChartDataService.connections[serverUrl].websocket;

    if(this.ws) // se a conexao ja existia entao aumenta o contador
      ChartDataService.connections[serverUrl].nrOfChartsUsing++;
    else { // se ainda nao existia cria uma nova e guarda-a no map 'connections'
      this.ws = new $WebSocket(serverUrl);
      ChartDataService.connections[serverUrl] = {websocket: this.ws, nrOfChartsUsing: 1};
    }

    this.ws.onMessage((msg: MessageEvent) => {
      this.subject.next(msg.data);
    });

    console.log(`CONNECTED TO SERVICE AT: ${serverUrl}`);
  }

  
  public closeConnection(url: string) : void{

    if(ChartDataService.connections[url]){
      if(ChartDataService.connections[url].nrOfChartsUsing == 0){ // se nenhum grafico esta a usar a conexao, fecha-la e remove-la do map 'connections'
        if(this.ws) this.ws.close(true);
        delete ChartDataService.connections[url];
      }
      else ChartDataService.connections[url].nrOfChartsUsing--; // senao decrementar o contador
    }
  }


  public getObservableData() {return this.subject;}
}   