import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

export type OnClickButton = () => void;

interface ButtonProps {
  onClickButton: OnClickButton;
  parentClass?: string;
}

function Button({ parentClass, onClickButton }: ButtonProps) {
  return (
    <button onClick={() => onClickButton()} className={classNames(styles.root, parentClass)}>
      Показать еще 5 билетов!
    </button>
  );
}

export default Button;
