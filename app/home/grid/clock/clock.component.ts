import { Component, OnDestroy, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Observable } from "rxjs/Observable";


@Component({
    moduleId: module.id,
    selector: 'clock-cmp',
    templateUrl: 'clock.component.html'
})

export class ClockComponent implements OnInit {
    
        time: string;
        day: string;
        private closeConfigWindow:boolean = false;
        @Input() title: string;
        @Input() widgetID: number;
        @Output() update = new EventEmitter();
        
        ngOnInit(): void {
            this.startTime();
            let timer = Observable.timer(0,1000);
            timer.subscribe(t=> {
                this.startTime();
            });
        }


        startTime(): void {
            var today = new Date();
            var h: number = today.getHours();
            var mAux: number = today.getMinutes();
            var sAux: number = today.getSeconds();
            var m: string = this.checkTime(mAux);
            var s: string = this.checkTime(sAux);
            switch(today.getDay()){
                case 1: this.day = "Segunda-feira"; break;
                case 2: this.day = "Terça-feira"; break;
                case 3: this.day = "Quarta-feira"; break;
                case 4: this.day = "Quinta-feira"; break;
                case 5: this.day = "Sexta-feira"; break;
                case 6: this.day = "Sábado"; break;
                case 7: this.day = "Domingo"; break;
            }
            this.time = h + ":" + m + ":" + s;
        }

        checkTime(i: number): string {
            if (i < 10) {
                var a: string = "0" + i
                return a;
            };  // add zero in front of numbers < 10
            return '' + i;
        }

        private updateConfig(serviceURL: string) {
            this.update.emit({id: this.widgetID, title: this.title, url: undefined});
        }
}