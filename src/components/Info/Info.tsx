import React from 'react';

import './Info.scss';
import Time from '../Time';
import { ITime } from '../Time/Time';

export interface IInfo {
  id: number;
  timeItems: Array<ITime>;
}

interface InfoProps {
  item: IInfo;
}

function Info({ item: { timeItems } }: InfoProps) {
  return (
    <div className="departure__info info">
      <ul className="info__list">
        {timeItems.map((e) => (
          <li key={e.id} className="info__item">
            <Time item={e} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Info;
