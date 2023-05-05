import { ITicket } from '../../../models/ITicket';

export enum TicketsActionEnum {
  SET_TICKETS = 'SET_TICKETS',
  PUSH_TICKETS = 'PUSH_TICKETS',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_ERROR = 'SET_ERROR',
}

export interface SetTicketsAction {
  type: TicketsActionEnum.SET_TICKETS;
  payload: Array<ITicket>;
}

export interface PushTicketsAction {
  type: TicketsActionEnum.PUSH_TICKETS;
  payload: Array<ITicket>;
}

export interface SetIsLoadingAction {
  type: TicketsActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetErrorAction {
  type: TicketsActionEnum.SET_ERROR;
  payload: string | null;
}

export type TicketAction = SetTicketsAction | SetIsLoadingAction | SetErrorAction | PushTicketsAction;

interface State {
  tickets: Array<ITicket>;
  isLoading: boolean;
  error: null | string;
  searchId: string | null;
}

const initialState: State = {
  tickets: [],
  isLoading: false,
  error: null,
  searchId: null,
};

export default function ticketsReducer(state = initialState, action: TicketAction): State {
  switch (action.type) {
    case TicketsActionEnum.SET_TICKETS: {
      return { ...state, tickets: action.payload };
    }
    case TicketsActionEnum.PUSH_TICKETS: {
      return { ...state, tickets: [...state.tickets, ...action.payload] };
    }
    case TicketsActionEnum.SET_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case TicketsActionEnum.SET_IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default:
      return state;
  }
}
