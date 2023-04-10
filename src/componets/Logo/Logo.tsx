import React from 'react';

import styles from './logo.module.css'
import imgSrc from './logo.svg';


export const Logo = () => {

  return (
    <img
      src={imgSrc}
      className={styles.root}
      alt="Спецтех Система (crm-система)"
    />
  );
};
