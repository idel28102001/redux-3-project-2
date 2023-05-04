import React from 'react';

import './Checkboxes.scss';
import Checkbox from '../Checkbox';
import { ICheckBox } from '../Checkbox/Checkbox';

interface CheckboxesProps {
  filters: Array<ICheckBox>;
}

function Checkboxes({ filters }: CheckboxesProps) {
  return (
    <ul className="filter__list checkboxes">
      {filters.map((e) => (
        <li key={e.id} className="checkboxes__item">
          <Checkbox checkbox={e} />
        </li>
      ))}
    </ul>
  );
}

export default Checkboxes;
