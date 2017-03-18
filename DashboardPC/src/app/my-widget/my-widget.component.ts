import {Component, Renderer, ElementRef, forwardRef, Input} from "@angular/core";
import {WidgetComponent} from "ng2-dashboard";

@Component({
  selector: 'app-my-widget',
  templateUrl: './my-widget.component.html',
  styleUrls: ['./my-widget.component.css'],
  providers: [{provide: WidgetComponent, useExisting: forwardRef(() => MyWidgetComponent) }]
})
export class MyWidgetComponent extends WidgetComponent {
  @Input() public size: number[] = [1, 1];
  @Input() public widgetId: string;

  constructor(ngEl: ElementRef, renderer: Renderer) {
    super(ngEl, renderer);
  }
}
