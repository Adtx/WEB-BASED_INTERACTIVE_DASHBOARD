import { Component } from '@angular/core';
import {  HeaderComponent} from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard!';
   private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}
