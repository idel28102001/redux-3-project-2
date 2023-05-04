import React from 'react';

import './Filter.scss';
import Checkboxes from '../Checkboxes';
import { ICheckBox } from '../Checkbox/Checkbox';

function Filter() {
  const filters: Array<ICheckBox> = [
    { id: 1, label: 'Всё', checked: false },
    {
      id: 2,
      label: 'Без пересадок',
      checked: false,
    },
    { id: 3, label: '1 пересадка', checked: false },
    { id: 4, label: '2 пересадки', checked: false },
    {
      id: 5,
      label: '3 пересадки',
      checked: false,
    },
  ];
  return (
    <div className="filter">
      <div className="filter__header">
        <h3 className="filter__heading">Количество пересадок</h3>
      </div>
      <div className="filter__main">
        <Checkboxes filters={filters} />
      </div>
    </div>
  );
}

export default Filter;
