import React from 'react';
import classNames from 'classnames';

import logo from '../../assets/1-logo.png';

import styles from './Information.module.scss';

export interface IInformation {
  price: string;
  logo: string;
}

interface InformationProps {
  info: IInformation;
  parentClass?: string;
}

function Information({ info: { price }, parentClass }: InformationProps) {
  return (
    <div className={classNames(styles.information, parentClass)}>
      <div>
        <span className={styles.information__amount}>{price}</span>
      </div>
      <div className={styles.information__companyLogo}>
        <img className={styles.information__img} src={logo} alt="Лого компании" />
      </div>
    </div>
  );
}

export default Information;
