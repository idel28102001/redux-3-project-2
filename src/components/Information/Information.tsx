import React from 'react';

import './Information.scss';
import logo from '../../assets/1-logo.png';

export interface IInformation {
  price: string;
  logo: string;
}

interface InformationProps {
  info: IInformation;
}

function Information({ info: { price } }: InformationProps) {
  return (
    <div className="card__information information">
      <div className="information__price">
        <span className="information__amount">{price}</span>
      </div>
      <div className="information__company-logo">
        <img className="information__img" src={logo} alt="Лого компании" />
      </div>
    </div>
  );
}

export default Information;
