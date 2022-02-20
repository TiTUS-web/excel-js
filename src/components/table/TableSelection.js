export class TableSelection {
  static className = 'data__cell_selected';

  constructor() {
    this.group = [];
  }

  select($el) {
    this.clear();
    this.group.push($el);
    $el.addClass(TableSelection.className);
  }

  clear() {
    this.group.forEach(($el) => $el.removeClass(TableSelection.className));
    this.group = [];
  }

  selectGroup() {}
}
