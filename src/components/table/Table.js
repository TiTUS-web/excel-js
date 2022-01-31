import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
  constructor() {
    super();
  }

  toHTML() {
    return '<h1>Table</h1>'
  }
}
