import { SetStatusAction, SortActionEnum, SortStatus } from './index';

export const sortActionCreators = {
  setStatus: (status: SortStatus): SetStatusAction => ({ type: SortActionEnum.SET_STATUS, payload: status }),
};
