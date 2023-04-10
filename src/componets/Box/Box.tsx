import React, { useMemo } from 'react';
import type { StandardLonghandProperties } from 'csstype';

type BoxProps = {
  children: React.ReactNode;
  my?: number;
  mt?: number;
  mb?: number;
  textAlign?: StandardLonghandProperties['textAlign'];
};

export const Box = ({ children, my, mt, mb, textAlign }: BoxProps) => {
  const marginStyles = useMemo(() => {
    const styles: Record<string, string> = {}

    if (my) {
      styles.margin = `${my}px 0`;
    }

    if (mb) {
      styles.marginBottom = `${mb}px`;
    }

    if (mt) {
      styles.marginTop = `${mt}px`;
    }

    return styles;
  }, [mb, mt, my])

  return (
    <div style={{
      ...marginStyles,
      textAlign
    }}>
      {children}
    </div>
  );
};
