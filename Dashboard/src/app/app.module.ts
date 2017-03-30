import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SidebarModule } from 'ng-sidebar';
import { AppComponent } from './app.component';
import { TopBarComponent } from './shared/TopBar/topbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NgGridModule } from 'angular2-grid';
@NgModule({
  declarations: [
    TopBarComponent,
    SidebarComponent,
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  SidebarModule.forRoot(),
  NgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
