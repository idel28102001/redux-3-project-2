export enum FilterActionEnum {
  TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX',
}

export interface ICheckbox {
  id: number;
  label: string;
  isChecked: boolean;
}

export interface ToggleCheckboxAction {
  type: FilterActionEnum.TOGGLE_CHECKBOX;
  payload: ICheckbox;
}

export type FilterAction = ToggleCheckboxAction;

interface State {
  filters: Array<ICheckbox>;
}

const initialState: State = {
  filters: [
    { id: 1, label: 'Всё', isChecked: false },
    {
      id: 2,
      label: 'Без пересадок',
      isChecked: false,
    },
    { id: 3, label: '1 пересадка', isChecked: false },
    { id: 4, label: '2 пересадки', isChecked: false },
    {
      id: 5,
      label: '3 пересадки',
      isChecked: false,
    },
  ],
};

const setIsCheckedToCheckboxes = (value: boolean, filters: Array<ICheckbox>): Array<ICheckbox> => {
  return filters.map((e) => ({ ...e, isChecked: value }));
};
const setIsCheckedToAll = (id: number, filter: ICheckbox, filters: Array<ICheckbox>): Array<ICheckbox> => {
  const isAllTheSameChecked = filters
    .filter((e) => e.id !== id && e.id !== filter.id)
    .every((e) => e.isChecked === !filter.isChecked);
  return filters.map((e) => {
    if (e.id === id) return { ...e, isChecked: isAllTheSameChecked };
    if (e.id !== filter.id) return e;
    return { ...e, isChecked: !e.isChecked };
  });
};

const toggleCheckbox = (filter: ICheckbox, filters: Array<ICheckbox>) => {
  const idOfAll = 1;
  if (filter.id === idOfAll) {
    return setIsCheckedToCheckboxes(!filter.isChecked, filters);
  }
  return setIsCheckedToAll(idOfAll, filter, filters);
};

export default function filterReducer(state = initialState, action: FilterAction): State {
  switch (action.type) {
    case FilterActionEnum.TOGGLE_CHECKBOX: {
      return { ...state, filters: toggleCheckbox(action.payload, state.filters) };
    }
    default:
      return state;
  }
}
