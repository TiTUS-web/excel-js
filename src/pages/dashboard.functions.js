function toHTML() {
  return `
        <li class="dashboard__record">
            <a href="#">Таблица номер 1</a>
            <strong>12.06.2020</strong>
        </li>
    `;
}

function getAllKeys() {
  const keys = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.includes('excel')) {
      continue;
    }
    keys.push(key);
  }

  return keys;
}

export function createRecordsTable() {
  const keys = getAllKeys();

  if (!keys.length) {
    return `<p>You haven't made any tables yet</p>`;
  }

  return `
        <div class="dashboard__list-header">
            <span>Название</span>
            <span>Дата открытия</span>
        </div>

        <ul class="dashboard__list">
            ${keys.map(toHTML).join('')}
        </ul>
    `;
}
