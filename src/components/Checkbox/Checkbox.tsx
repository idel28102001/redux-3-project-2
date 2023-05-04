import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Checkbox.module.scss';

export interface ICheckBox {
  id: number;
  label: string;
  checked: boolean;
}

interface CheckBoxProps {
  checkbox: ICheckBox;
  parentClass?: string;
}

const Checkbox: FC<CheckBoxProps> = ({ checkbox: { checked, label }, parentClass }) => {
  return (
    <div className={classNames(styles.checkbox, parentClass)}>
      <label className={styles.checkbox__label}>
        <input className={styles.checkbox__input} type="checkbox" defaultChecked={checked} />
        <span className={styles.checkbox__checkmark}></span>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
