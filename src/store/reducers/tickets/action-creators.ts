import { ITicket } from '../../../models/ITicket';
import { AppDispatch } from '../../index';
import TicketsService from '../../../services/TicketsService';

import { PushTicketsAction, SetErrorAction, SetIsLoadingAction, SetTicketsAction, TicketsActionEnum } from './index';
import { retry } from '../../../common/retry';

const timer = (n: number) => new Promise((res) => setTimeout(res, n));
export const ticketActionCreators = {
  setTickets: (tickets: Array<ITicket>): SetTicketsAction => ({
    type: TicketsActionEnum.SET_TICKETS,
    payload: tickets,
  }),
  pushTickets: (tickets: Array<ITicket>): PushTicketsAction => ({
    type: TicketsActionEnum.PUSH_TICKETS,
    payload: tickets,
  }),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
    type: TicketsActionEnum.SET_IS_LOADING,
    payload: isLoading,
  }),
  setError: (error: string | null): SetErrorAction => ({ type: TicketsActionEnum.SET_ERROR, payload: error }),
  fetchTickets: (controller: AbortController) => async (dispatch: AppDispatch) => {
    try {
      dispatch(ticketActionCreators.setError(null));
      dispatch(ticketActionCreators.setIsLoading(true));
      const searchId = await retry(() => TicketsService.fetchSearchId(controller.signal), 3, 1000);
      let isStop = false;
      while (!isStop && !controller.signal.aborted) {
        const result = await retry(() => TicketsService.fetchTickets(searchId, controller.signal), 5, 1000);
        dispatch(ticketActionCreators.pushTickets(result.tickets));
        isStop = result.stop;
      }
      dispatch(ticketActionCreators.setIsLoading(false));
    } catch (e) {
      if (e instanceof DOMException) return;
      const text = 'Что-то пошло не так';
      dispatch(ticketActionCreators.setError(text));
    }
  },
};
