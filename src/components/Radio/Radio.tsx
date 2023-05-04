import React from 'react';
import './Radio.scss';

export interface IRadio {
  id: number;
  label: string;
  value: string;
  checked: boolean;
}

interface RadioProps {
  sort: IRadio;
}

function Radio({ sort: { checked, label, value } }: RadioProps) {
  return (
    <div className="radios__radio radio">
      <label className="radio__label">
        <input className="radio__radio" type="radio" name="sort" value={value} defaultChecked={checked} />
        {label}
      </label>
    </div>
  );
}

export default Radio;
