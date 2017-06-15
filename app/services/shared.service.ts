import { Injectable } from '@angular/core';
import { Subject, Observer, Observable } from 'rxjs';

export class SharedService {

  public subject: Subject<any> = new Subject<any>();

}