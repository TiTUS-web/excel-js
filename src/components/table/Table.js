import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  toHTML() {
    return `
    <div class="table__row row">
        <div class="row__info"></div>

        <div class="row__data data">
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        <div class="data__column">A</div>
        </div>
    </div>

    <div class="row">
        <div class="row__info">1</div>

        <div class="row__data">
            <div class="data__cell data__cell_selected" contenteditable="">A1</div>
            <div class="data__cell" contenteditable="">B2</div>
            <div class="data__cell" contenteditable="">C3</div>
        </div>
    </div>

    <div class="row">
        <div class="row__info">2</div>

        <div class="row__data">
            <div class="data__cell">A1</div>
            <div class="data__cell">B2</div>
            <div class="data__cell">C3</div>
        </div>
    </div>
    `;
  }
}
