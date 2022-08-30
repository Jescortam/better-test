import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const NavbarLoginButton = () => {
  return (
    <Button component={Link} to={'/login'} variant="contained" color="primary">
      Log In
    </Button>
  );
};

export default NavbarLoginButton;
