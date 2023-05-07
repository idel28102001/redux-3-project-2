import React from 'react';
import classNames from 'classnames';

import styles from './Information.module.scss';

export interface IInformation {
  price: string;
  logo: string;
}

interface InformationProps {
  info: IInformation;
  parentClass?: string;
}

function Information({ info: { price, logo }, parentClass }: InformationProps) {
  return (
    <div className={classNames(styles.root, parentClass)}>
      <div>
        <span className={styles.amount}>{price}</span>
      </div>
      <div className={styles.companyLogo}>
        <img className={styles.img} src={logo} alt="Лого компании" />
      </div>
    </div>
  );
}

export default Information;
