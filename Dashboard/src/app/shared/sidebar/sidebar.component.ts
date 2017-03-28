import { Component } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
@Component({
  
    selector: 'shared-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
      private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
 }
