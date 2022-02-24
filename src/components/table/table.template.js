const CODES = {
  A: 65,
  Z: 90,
};

function createCell(row) {
  return function(_, col) {
    return `
      <div 
        class="data__cell" 
        contenteditable 
        data-col="${col}" 
        data-type="cell" 
        data-id="${row}:${col}"
      >
      </div>
    `;
  }
}

function createCol(col, index) {
  return `
        <div class="data__column" data-type="resizable" data-col="${index}">
            ${col}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `;
}

function createRow(index, content) {
  const resize = index
    ? '<div class="row-resize" data-resize="row"></div>'
    : '';

  return `
        <div class="row" data-type="resizable">
            <div class="row__info">
              ${index ? index : ''}
              ${resize}
            </div>
            <div class="row__data">${content}</div>
        </div>  
    `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(createCol)
    .join('');

  rows.push(createRow(null, cols));

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
      .fill('')
      .map(createCell(row))
      .join('');

    rows.push(createRow(row + 1, cells));
  }

  return rows.join('');
}
