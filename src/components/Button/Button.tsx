import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps {
  parentClass?: string;
}

function Button({ parentClass }: ButtonProps) {
  return <button className={classNames(styles.button, parentClass)}>Показать еще 5 билетов!</button>;
}

export default Button;
