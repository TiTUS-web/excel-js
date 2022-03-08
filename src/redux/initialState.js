import {storage} from '@core/utils';
import {defaultStyles} from '@/constants';

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  currentText: '',
  currentStyles: defaultStyles,
};

export const intialState = storage('excel-state')
  ? storage('excel-state')
  : defaultState;
