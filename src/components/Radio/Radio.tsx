import React from 'react';
import classNames from 'classnames';
import { bindActionCreators } from '@reduxjs/toolkit';

import { SortStatus } from '../../store/reducers/sort';
import { useTypedSelect } from '../../hooks/useTypedSelect';
import { allActionCreators } from '../../store/reducers/action-creators';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';

import styles from './Radio.module.scss';

export interface IRadio {
  id: number;
  label: string;
  value: SortStatus;
}

interface RadioProps {
  sort: IRadio;
  parentClass?: string;
}

function Radio({ sort: { label, value }, parentClass }: RadioProps) {
  const { status } = useTypedSelect((state) => state.sort);
  const { setStatus } = bindActionCreators(allActionCreators, useTypedDispatch());
  const defaultChecked = status === value;
  return (
    <div className={classNames(styles.root, parentClass)}>
      <label className={styles.label}>
        <input
          className={styles.radio}
          type="radio"
          name="sort"
          value={value}
          defaultChecked={defaultChecked}
          onChange={() => setStatus(value)}
        />
        {label}
      </label>
    </div>
  );
}

export default Radio;
