import React, { FormEvent, useCallback, useState } from 'react';
import { useIMask } from 'react-imask';
import { useNavigate } from 'react-router-dom'

import { Button } from '../../componets/Button/Button';
import { Input } from '../../componets/Input/Input';
import { Link } from '../../componets/Link/Link';
import { Logo } from '../../componets/Logo/Logo';
import { Paper } from '../../componets/Paper/Paper';
import { Typography } from '../../componets/Typography/Typography';
import { Box } from '../../componets/Box/Box';

type ForgotPasswordProps = {
  onLinkClick: () => void;
};

const MASK_OPTIONS = { mask: '+{7}(000)000-00-00' };

export const ForgotPassword = ({ onLinkClick }: ForgotPasswordProps) => {
  const [errorMsg, setErrorMsg] = useState<null | string>(null)
  const {
    ref,
    value,
    setValue,
  } = useIMask(MASK_OPTIONS)
  const navigate = useNavigate();

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const phone = formData.get('phone') as string | null;

    if (phone?.length === 16) {
      onLinkClick();
      navigate(`?restored_phone=${encodeURIComponent(phone)}`, { replace: true })
    } else {
      setErrorMsg('Введите корректный номер телефона')
    }

  }, [navigate, onLinkClick])

  return (
    <Paper>
      <form action="#" onSubmit={handleSubmit}>
        <Logo />
        <Box mt={40} mb={47}>
          <Typography as="h3" style={{ textAlign: 'center' }}>
            Восстановление пароля
          </Typography>
        </Box>
        {errorMsg && <Typography style={{ color: 'red', textAlign: 'center', marginBottom: 16 }}>{errorMsg}</Typography>}
        <Input
          label="Введите телефон"
          id="phone"
          name="phone"
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Box mt={10} mb={43} textAlign="right">
          <Link onClick={onLinkClick}>назад</Link>
        </Box>
        <Button>Позвонить</Button>
      </form>
    </Paper>
  );
};

