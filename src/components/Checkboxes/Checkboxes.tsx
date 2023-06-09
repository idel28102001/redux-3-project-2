import React from 'react';
import classNames from 'classnames';
import Checkbox from '../Checkbox';
import styles from './Checkboxes.module.scss';
import { ICheckbox } from '../../store/reducers/filter';

interface CheckboxesProps {
  filters: Array<ICheckbox>;
  parentClass?: string;
}

function Checkboxes({ filters, parentClass }: CheckboxesProps) {
  return (
    <ul className={classNames(styles.list, parentClass)}>
      {filters.map((e) => (
        <li key={e.id}>
          <Checkbox checkbox={e} />
        </li>
      ))}
    </ul>
  );
}

export default Checkboxes;
