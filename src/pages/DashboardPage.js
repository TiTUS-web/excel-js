import {$} from '@core/dom.js';
import {Page} from '@core/Page';

export class DashboardPage extends Page {
  getRoot() {
    return $.create('div', 'dashboard').html(
        `
            <div class="dashboard__header">
                <h1>Excel Dashboard</h1>
            </div>

            <div class="dashboard__new">
                <div class="dashboard__view">
                    <a href="#" class="dashboard__create">
                        Новая <br />
                        Таблица
                    </a>
                </div>
            </div>

            <div class="dashboard__table dashboard__view">
                <div class="dashboard__list-header">
                    <span>Название</span>
                    <span>Дата открытия</span>
                </div>

                <ul class="dashboard__list">
                    <li class="dashboard__record">
                        <a href="#">Таблица номер 1</a>
                        <strong>12.06.2020</strong>
                    </li>

                    <li class="dashboard__record">
                        <a href="#">Таблица номер 2</a>
                        <strong>12.06.2020</strong>
                    </li>
                </ul>
            </div>
        `
    );
  }
}
