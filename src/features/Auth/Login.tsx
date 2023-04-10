import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useIMask } from 'react-imask';

import { Button } from '../../componets/Button/Button';
import { Input } from '../../componets/Input/Input';
import { Link } from '../../componets/Link/Link';
import { Logo } from '../../componets/Logo/Logo';
import { Paper } from '../../componets/Paper/Paper';
import { Box } from '../../componets/Box/Box';
import { Typography } from '../../componets/Typography/Typography';
import { AUTH_SESSION_KEY } from './utils/isAuthenticated';

type LoginProps = {
  onLinkClick: () => void;
};

const MASK_OPTIONS = { mask: '+{7}(000)000-00-00' };

export const Login = ({ onLinkClick }: LoginProps) => {
  const navigate = useNavigate();
  const location = useLocation()
  const formRef = useRef<HTMLFormElement | null>(null);

  const [errorMsg, setErrorMsg] = useState<null | string>(null)
  const {
    ref,
    value,
    setValue,
  } = useIMask(MASK_OPTIONS)

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const restoredPhone = params.get('restored_phone');

    if (restoredPhone) {
      // убираем ошибку
      setErrorMsg(null)
      // очищаем поля
      formRef.current?.reset()
      // новое значние в логин
      setValue(decodeURIComponent(restoredPhone));
      // убираем из урла временный параметр
      navigate('?', { replace: true });
    }
  }, [location.search, navigate, setValue])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const [login, password] = [(formData.get('login') as string).replace(/[+()-]/gm, ''), formData.get('password')];

    if (login === '71111111111' && password === '123456') {
      window.sessionStorage.setItem(AUTH_SESSION_KEY, String(true));
      navigate('/home');
    } else {
      setErrorMsg('Неправильный логин или пароль')
    }
  }

  return (
    <Paper>
      <form ref={formRef} action="#" onSubmit={handleSubmit}>
        <Box mb={40}>
          <Logo />
        </Box>

        {errorMsg && <Typography style={{ color: 'red', textAlign: 'center', marginBottom: 16 }}>{errorMsg}</Typography>}

        <Input
          ref={ref}
          label="Введите логин"
          id="login"
          name="login"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Input
          label="Введите пароль"
          id="password"
          name="password"
          type="password"
        />
        <Box mt={11} mb={42} textAlign="right">
          <Link onClick={onLinkClick}>Забыли пароль?</Link>
        </Box>
        <Button>Войти</Button>
      </form>
    </Paper>
  );
};
