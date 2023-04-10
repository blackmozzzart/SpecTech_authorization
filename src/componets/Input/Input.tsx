import { InputHTMLAttributes, forwardRef } from 'react';

import styles from './input.module.css';

type InputProps = {
  error?: string;
  label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(({ error, label, ...inputProps }, ref) => {
  return (
    <div className={styles.wrapper}>
      {error && (<p className={styles.error}>{error}</p>)}
      <label htmlFor={inputProps.id} className={styles.label}>{label}</label>
      <input ref={ref} {...inputProps} className={styles.input} />
    </div>
  );
});
