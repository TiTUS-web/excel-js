import {$} from '@core/dom.js';
import {Page} from '@core/Page';
import {createRecordsTable} from '@/pages/dashboard.functions';

export class DashboardPage extends Page {
  getRoot() {
    const now = Date.now().toString();
    return $.create('div', 'dashboard').html(
      `
            <div class="dashboard__header">
                <h1>Control Panel</h1>
            </div>

            <div class="dashboard__new">
                <div class="dashboard__view">
                    <a href="#excel/${now}" class="dashboard__create">
                        Новая <br />
                        Таблица
                    </a>
                </div>
            </div>

            <div class="dashboard__table dashboard__view">
                ${createRecordsTable()}
            </div>
        `
    );
  }
}
