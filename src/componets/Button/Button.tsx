import React from 'react';

import styles from './button.module.css';

type ButtonProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...btnProps }: ButtonProps) => {
  return (
    <button className={styles.root} {...btnProps}>
      {children}
    </button>
  );
};
