import { FilterActionEnum, ICheckbox, ToggleCheckboxAction } from './index';

export const filterActionCreators = {
  toggleCheckbox: (checkbox: ICheckbox): ToggleCheckboxAction => ({
    type: FilterActionEnum.TOGGLE_CHECKBOX,
    payload: checkbox,
  }),
};
