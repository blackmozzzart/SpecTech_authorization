import React from 'react';

import styles from './link.module.css';

type LinkProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const Link = ({ children, ...linkProps }: LinkProps) => {
  return (
    <a className={styles.root} {...linkProps}>
      {children}
    </a>
  );
};
