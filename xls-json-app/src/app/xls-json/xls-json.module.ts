import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XlsJsonComponent } from './xls-json.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [XlsJsonComponent],
  exports: [XlsJsonComponent]
})
export class XlsJsonModule { }
