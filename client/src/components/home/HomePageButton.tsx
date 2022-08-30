import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

interface props {
  children: string;
  to: string;
  color?:
    | 'primary'
    | 'inherit'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
}

const HomePageButton = ({ children, to, color = 'primary' }: props) => {
  return (
    <Button
      component={Link}
      to={to}
      variant="contained"
      color={color}
      size="large"
      sx={{ width: { xs: 200, sm: '100%' }, textAlign: 'center' }}
    >
      {children}
    </Button>
  );
};

export default HomePageButton;
