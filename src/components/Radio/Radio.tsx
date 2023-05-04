import React from 'react';
import classNames from 'classnames';

import styles from './Radio.module.scss';

export interface IRadio {
  id: number;
  label: string;
  value: string;
  checked: boolean;
}

interface RadioProps {
  sort: IRadio;
  parentClass?: string;
}

function Radio({ sort: { checked, label, value }, parentClass }: RadioProps) {
  return (
    <div className={classNames(styles.radio, parentClass)}>
      <label className={styles.radio__label}>
        <input className={styles.radio__radio} type="radio" name="sort" value={value} defaultChecked={checked} />
        {label}
      </label>
    </div>
  );
}

export default Radio;
