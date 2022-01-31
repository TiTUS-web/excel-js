import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  constructor() {
    super();
  }

  toHTML() {
    return '<h1>Toolbar</h1>';
  }
}
