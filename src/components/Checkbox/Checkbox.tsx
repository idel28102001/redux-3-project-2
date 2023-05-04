import React, { FC } from 'react';
import './Checkbox.scss';

export interface ICheckBox {
  id: number;
  label: string;
  checked: boolean;
}

interface CheckBoxProps {
  checkbox: ICheckBox;
}

const Checkbox: FC<CheckBoxProps> = ({ checkbox: { checked, label } }) => {
  return (
    <div className="checkboxes__checkbox checkbox">
      <label className="checkbox__label">
        <input className="checkbox__input" type="checkbox" defaultChecked={checked} />
        <span className="checkbox__checkmark"></span>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
