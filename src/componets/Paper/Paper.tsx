import React, { memo } from 'react';

import styles from './paper.module.css';

type PaperProps = {
  children: React.ReactNode;
};

export const Paper = memo(({ children }: PaperProps) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
});
