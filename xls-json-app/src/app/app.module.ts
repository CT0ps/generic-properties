import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XlsJsonModule } from './xls-json/xls-json.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    XlsJsonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
