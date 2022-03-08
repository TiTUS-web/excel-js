import {$} from '@core/dom';
import {ExcelComponent} from '@core/ExcelComponent';
import {changeTitle} from '@/redux/actions';
import {defaultTitle} from '@/constants';
import {debounce} from '@core/utils';

export class Header extends ExcelComponent {
  static className = 'excel__header';

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options,
    });
  }

  prepare() {
    this.onInput = debounce(this.onInput, 300);
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle;
    return `
        <input class="header__input" type="text" value="${title}" />
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

  onInput(event) {
    const $target = $(event.target);
    this.$dispatch(changeTitle($target.text()));
  }
}
