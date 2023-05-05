import { sortActionCreators } from './sort/action-creators';
import { filterActionCreators } from './filter/action-creators';
import { ticketActionCreators } from './tickets/action-creators';

export const allActionCreators = {
  ...sortActionCreators,
  ...filterActionCreators,
  ...ticketActionCreators,
};
