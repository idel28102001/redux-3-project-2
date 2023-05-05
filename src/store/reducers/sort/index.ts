export enum SortActionEnum {
  SET_STATUS = 'SET_STATUS',
}

export enum SortStatus {
  'cheapest' = 'cheapest',
  'fastest' = 'fastest',
  'optimal' = 'optimal',
}

export interface SetStatusAction {
  type: SortActionEnum.SET_STATUS;
  payload: SortStatus;
}

export type SortAction = SetStatusAction;

interface State {
  status: SortStatus;
}

const initialState: State = {
  status: SortStatus.cheapest,
};

export default function sortReducer(state = initialState, action: SortAction): State {
  switch (action.type) {
    case SortActionEnum.SET_STATUS: {
      return { status: action.payload };
    }
    default:
      return state;
  }
}
