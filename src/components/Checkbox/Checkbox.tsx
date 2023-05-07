import classNames from 'classnames';
import React, { FC } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';

import { ICheckbox } from '../../store/reducers/filter';
import { allActionCreators } from '../../store/reducers/action-creators';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';

import styles from './Checkbox.module.scss';

interface CheckBoxProps {
  checkbox: ICheckbox;
  parentClass?: string;
}

const Checkbox: FC<CheckBoxProps> = ({ checkbox, parentClass }) => {
  const { toggleCheckbox } = bindActionCreators(allActionCreators, useTypedDispatch());
  return (
    <div className={classNames(styles.root, parentClass)}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="checkbox"
          checked={checkbox.isChecked}
          onChange={() => toggleCheckbox(checkbox)}
        />
        <span className={styles.checkmark}></span>
        {checkbox.label}
      </label>
    </div>
  );
};

export default Checkbox;
