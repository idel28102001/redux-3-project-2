import React from 'react';

import './Card.scss';
import Information from '../Information';
import Departure from '../Departure';
import { IInformation } from '../Information/Information';
import { IInfo } from '../Info/Info';

export interface ICard {
  id: number;
  info: IInformation;
  infoItems: Array<IInfo>;
}

export interface CardProps {
  item: ICard;
}

function Card({ item: { infoItems, info } }: CardProps) {
  return (
    <div className="ticket__card card">
      <Information info={info} />
      <Departure infoItems={infoItems} />
    </div>
  );
}

export default Card;
