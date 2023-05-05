import sort, { SortAction } from './sort';
import filter, { FilterAction } from './filter';

export type AllActions = SortAction | FilterAction;
export default { sort, filter };
