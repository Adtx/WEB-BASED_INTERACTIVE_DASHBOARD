import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SidebarModule } from 'ng-sidebar';
import { AppComponent } from './app.component';
import {  HeaderComponent} from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
