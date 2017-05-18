import { Injectable } from '@angular/core';
import { Subject, Observer, Observable } from 'rxjs';
import {$WebSocket} from 'angular2-websocket/angular2-websocket';


@Injectable()
export class ChartDataService {

  private ws: $WebSocket;
  private subject: Subject<any> = new Subject<any>();

  constructor (
    /*private serverUrl: string,
    private numberOfDataPoints: number,*/
  ) {
      this.ws = new $WebSocket('ws://localhost:8080');

      this.ws.onMessage((msg: MessageEvent) => {
        this.subject.next(msg.data);
      });
  }

  public getObservableData() {return this.subject;}
  
}   