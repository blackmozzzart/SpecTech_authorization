import { useNavigate } from 'react-router-dom';

import { Button } from '../../componets/Button';
import { Typography } from '../../componets/Typography';

export const Home = () => {
  const navigate = useNavigate()

  const handleExit = () => {
    window.sessionStorage.removeItem('auth_token');
    navigate('/login');
  }

  return (
    <div>
      <Typography>Вы успешно авторизовались!</Typography>
      <Button onClick={handleExit}>Выход</Button>
    </div>
  );
};
