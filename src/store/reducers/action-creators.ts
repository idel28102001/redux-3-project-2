import { sortActionCreators } from './sort/action-creators';
import { filterActionCreators } from './filter/action-creators';

export const allActionCreators = {
  ...sortActionCreators,
  ...filterActionCreators,
};
