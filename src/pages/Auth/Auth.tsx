import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { Flip } from '../../componets/Flip';
import { Login } from '../../features/Auth/Login';
import { ForgotPassword } from '../../features/Auth/ForgotPassword';
import { isAuthenticated } from '../../features/Auth/utils/isAuthenticated';

import styles from './auth.module.css';

export const Auth = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  if (isAuthenticated()) {
    return <Navigate to='/home' replace />
  }

  const handleFlip = () => {
    setIsFlipped((prev) => !prev)
  }

  return (
    <div className={styles.container}>
      <Flip
        isFlipped={isFlipped}
        front={<Login onLinkClick={handleFlip} />}
        back={<ForgotPassword onLinkClick={handleFlip} />}
      />
    </div>
  );
};
