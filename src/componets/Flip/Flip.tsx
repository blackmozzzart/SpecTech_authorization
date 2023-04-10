import React, { memo, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import styles from './flip.module.css';

type FlipProps = {
  front: React.ReactNode;
  back: React.ReactNode;
  isFlipped?: boolean;
};

export const Flip = memo(({ front, back, isFlipped }: FlipProps) => {
  const [animationClass, setAnimationClass] = useState<string>('');
  const firstRenderRef = useRef(true);

  useEffect(() => {
    // При первом рендере не применяем классы с анимацией
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    const animationClass = isFlipped ? styles.unflip : styles.flipped;

    setAnimationClass(animationClass)
  }, [isFlipped]);

  const rootClasses = [
    styles.container,
    animationClass
    // isFlipped ? styles.unflip : styles.flipped
  ];

  return (
    <div className={rootClasses.join(' ')}>
      <div className={cn(styles.front, styles.card)}>{front}</div>
      <div className={cn(styles.back, styles.card)}>{back}</div>
    </div>
  );
});
