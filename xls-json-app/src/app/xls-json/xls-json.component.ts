import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'xls-json',
  templateUrl: './xls-json.component.html'
})
export class XlsJsonComponent {
  @Input('skip-title') skipTitle: boolean = true; // the property name to set whether the title row will be included or not
  @Output() public dataEvent = new EventEmitter();
  private data: any;

  /**
   * Once the user pick the file
   * @param ev the file object passed by input element
   */
  fileChanged(ev) {
    console.log("File changed!")
    let reader: FileReader = new FileReader();
    reader.onload = (e) => {
      /* read workbook */
      let bstr: string = e.target.result;
      let wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

      /* grab first sheet */
      let wsname: string = wb.SheetNames[0];
      let ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <any>(XLSX.utils.sheet_to_json(ws, {header: 1}));
      if (this.skipTitle) // get rid the title row item
        this.data.shift()

      // Emit the data result to the client
      this.dataEvent.emit(this.data);
    };
    reader.readAsBinaryString(ev.target.files[0]);
  }
}