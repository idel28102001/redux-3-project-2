import sort, { SortAction } from './sort';
import filter, { FilterAction } from './filter';
import tickets, { TicketAction } from './tickets';

export type AllActions = SortAction | FilterAction | TicketAction;
export default { sort, filter, tickets };
