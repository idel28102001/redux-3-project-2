import { addMinutes, format } from 'date-fns';

import fetchData from '../common/fetchData';
import { ISegment, ITicket } from '../models/ITicket';
import { ICard } from '../components/Card/Card';
import { IInformation } from '../components/Information/Information';
import { IInfo } from '../components/Info/Info';
import { ITime } from '../components/Time/Time';
import { SortStatus } from '../store/reducers/sort';
import { ICheckbox } from '../store/reducers/filter';

export interface GetTickets {
  stop: boolean;
  tickets: Array<ITicket>;
}

export interface GetSearchId {
  searchId: string;
}

export default class TicketsService {
  static baseUrl = 'https://aviasales-test-api.kata.academy';
  static picsUrl = 'https://pics.avs.io/99/36';

  static async fetchSearchId(signal?: AbortSignal): Promise<string> {
    const url = `${TicketsService.baseUrl}/search`;
    const result = await fetchData<GetSearchId>(url, undefined, signal);
    return result.searchId;
  }

  static async fetchTickets(searchId: string, signal?: AbortSignal): Promise<GetTickets> {
    const url = `${TicketsService.baseUrl}/tickets`;
    return await fetchData<GetTickets>(url, { params: { searchId } }, signal);
  }

  static getLogoUrl(code: string) {
    return `${TicketsService.picsUrl}/${code}.png`;
  }

  static formatInfo(ticket: ITicket): IInformation {
    const price = ticket.price.toLocaleString('fr') + ' Р';
    const logo = TicketsService.getLogoUrl(ticket.carrier);
    return { logo, price };
  }

  static formatDestination(segment: ISegment): ITime {
    const startDate = new Date(segment.date);
    const heading = `${segment.origin} - ${segment.destination}`;
    const start = format(startDate, 'HH:mm');
    const endDate = addMinutes(startDate, segment.duration);
    const end = format(endDate, 'HH:mm');
    const description = `${start} - ${end}`;
    return { id: 1, heading, description };
  }

  static formatDurationTime(segment: ISegment): ITime {
    const date = new Date(0); // Начальная дата
    const resultDate = addMinutes(date, segment.duration - 180); // Добавляем минуты к начальной дате
    const formatString = segment.duration >= 1440 ? 'dд Hч mм' : 'Hч mм';
    const formattedDate = format(resultDate, formatString); // Форматируем дату в нужный формат
    return { id: 2, heading: 'В пути', description: formattedDate };
  }

  static transferTime(segment: ISegment): ITime {
    const endOfWord = segment.stops.length === 1 ? 'а' : 'и';
    const heading = segment.stops.length > 0 ? `${segment.stops.length} пересадк${endOfWord}` : 'Прямой рейс';
    const description = segment.stops.length > 0 ? segment.stops.join(', ') : '';
    return { id: 3, heading, description };
  }

  static formatTimeItem(segment: ISegment): Array<ITime> {
    const destination: ITime = TicketsService.formatDestination(segment);
    const duration: ITime = TicketsService.formatDurationTime(segment);
    const transfer: ITime = TicketsService.transferTime(segment);
    return [destination, duration, transfer];
  }

  static formatInfoItems(ticket: ITicket): IInfo[] {
    return ticket.segments.map((item, index) => ({ id: index, timeItems: TicketsService.formatTimeItem(item) }));
  }

  static formatTicket(id: number, ticket: ITicket): ICard {
    const info = TicketsService.formatInfo(ticket);
    const infoItems = TicketsService.formatInfoItems(ticket);
    return { id, info, infoItems };
  }

  static sortTickets(tickets: Array<ITicket>, status: SortStatus): Array<ITicket> {
    const calcDuration = (segments: ISegment[]) => segments.reduce((a, v) => a + v.duration, 0);
    switch (status) {
      case SortStatus.cheapest:
        return [...tickets].sort((a, b) => a.price - b.price);
      case SortStatus.fastest:
        return [...tickets].sort((a, b) => {
          const aDur = calcDuration(a.segments);
          const bDur = calcDuration(b.segments);
          return aDur - bDur;
        });
      case SortStatus.optimal: {
        const meanPrice = tickets.reduce((acc, val) => acc + val.price, 0) / tickets.length;
        const meanDuration = tickets.reduce((acc, val) => acc + calcDuration(val.segments), 0) / tickets.length;
        return [...tickets].sort((a, b) => {
          const aSide = a.price / meanPrice + calcDuration(a.segments) / meanDuration;
          const bSide = b.price / meanPrice + calcDuration(b.segments) / meanDuration;
          return aSide - bSide;
        });
      }
      default:
        return tickets;
    }
  }

  static filterTickets(tickets: Array<ITicket>, filters: Array<ICheckbox>): Array<ITicket> {
    const all = filters.find((e) => e.id === 1);
    if (all?.isChecked) return tickets;
    const checkedFilters = filters
      .filter((e) => e.id !== 1)
      .filter((e) => e.isChecked)
      .map((e) => e.transferLen);
    return tickets.filter((ticket) => {
      const allFilters = ticket.segments.map((e) => e.stops.length);
      return checkedFilters.some((e) => allFilters.includes(e));
    });
  }

  static formatTickets(
    tickets: Array<ITicket>,
    status: SortStatus,
    filters: Array<ICheckbox>,
    limit = 5
  ): Array<ICard> {
    const filteredTickets = TicketsService.filterTickets(tickets, filters);
    const sortedTickets = TicketsService.sortTickets(filteredTickets, status);
    return sortedTickets.slice(0, limit).map((item, index) => TicketsService.formatTicket(index, item));
  }
}
