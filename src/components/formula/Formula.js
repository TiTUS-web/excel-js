import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  constructor() {
    super();
  }

  toHTML() {
    return '<h1>Formula</h1>';
  }
}
