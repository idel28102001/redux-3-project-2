import classNames from 'classnames';
import React from 'react';

import Information from '../Information';
import Departure from '../Departure';
import { IInformation } from '../Information/Information';
import { IInfo } from '../Info/Info';

import styles from './Card.module.scss';

export interface ICard {
  id: number;
  info: IInformation;
  infoItems: Array<IInfo>;
}

export interface CardProps {
  item: ICard;
  parentClass?: string;
}

function Card({ item: { infoItems, info }, parentClass }: CardProps) {
  return (
    <div className={classNames(styles.card, parentClass)}>
      <Information info={info} />
      <Departure infoItems={infoItems} />
    </div>
  );
}

export default Card;
