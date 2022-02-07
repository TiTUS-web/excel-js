import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header';

  toHTML() {
    return `
        <input class="header__input" type="text" value="Новая таблица" />
        <div class="excel__buttons">
            <div class="header__button button">
                <i class="button__icon material-icons">delete</i>
            </div>

            <div class="header__button button">
                <i class="button__icon material-icons">exit_to_app</i>
            </div>
        </div>
      `;
  }
}
