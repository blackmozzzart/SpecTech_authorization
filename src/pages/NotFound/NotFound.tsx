import { Link } from 'react-router-dom';

import { Typography } from '../../componets/Typography';
import { isAuthenticated } from '../../features/Auth/utils/isAuthenticated';

export const NotFound = () => {

  return (
    <Typography>
      <span>404! Страница не найдена!</span>
      <br />
      <Link to={'/'} replace>{isAuthenticated() ? 'На главную' : 'Ко входу'}</Link>
    </Typography>
  );
};
