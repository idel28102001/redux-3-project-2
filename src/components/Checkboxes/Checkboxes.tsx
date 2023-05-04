import React from 'react';
import classNames from 'classnames';

import Checkbox from '../Checkbox';
import { ICheckBox } from '../Checkbox/Checkbox';

interface CheckboxesProps {
  filters: Array<ICheckBox>;
  parentClass?: string;
}

function Checkboxes({ filters, parentClass }: CheckboxesProps) {
  return (
    <ul className={classNames(parentClass)}>
      {filters.map((e) => (
        <li key={e.id}>
          <Checkbox checkbox={e} />
        </li>
      ))}
    </ul>
  );
}

export default Checkboxes;
