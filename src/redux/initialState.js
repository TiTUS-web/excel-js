import {storage} from '@core/utils';

const defaultState = {
  rowState: {},
  colState: {},
};

export const intialState = storage('excel-state')
  ? storage('excel-state')
  : defaultState;
