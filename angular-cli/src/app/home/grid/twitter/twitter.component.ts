import { Component, OnDestroy, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'twitter-cmp',
    templateUrl: 'twitter.component.html'
})

export class TwitterComponent {
  private closeConfigWindow:boolean = false;
  @Input() title: string;
  @Input() widgetID: number;
  @Output() update = new EventEmitter();


  private updateConfig(serviceURL: string) {
    this.update.emit({id: this.widgetID, title: this.title, url: undefined});
  }

}