import React from 'react';
import './Time.scss';

export interface ITime {
  id: number;
  heading: string;
  description: string;
}

interface TimeProps {
  item: ITime;
}

function Time({ item: { heading, description } }: TimeProps) {
  return (
    <div className="info__time time">
      <h4 className="time__heading">{heading}</h4>
      <p className="time__description">{description}</p>
    </div>
  );
}

export default Time;
