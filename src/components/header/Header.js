import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
    constructor() {
        super();
      }
    
      toHTML() {
        return '<h1>Header</h1>'
      }
}
