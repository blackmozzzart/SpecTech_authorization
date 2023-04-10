import React, { CSSProperties } from 'react';
import cn from 'classnames';

import styles from './typography.module.css';

type TypographyProps = {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  style?: CSSProperties;
};

export const Typography = ({ as: Component = 'p', children, style }: TypographyProps) => {

  return (
    <Component
      className={cn({
        [styles.title]: ['h3', 'h1', 'h2'].includes(Component),
        [styles.text]: Component === 'p',
      })}
      style={style}
    >
      {children}
    </Component>
  );
};
