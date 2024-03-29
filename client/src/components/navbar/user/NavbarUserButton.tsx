import React from 'react';
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

const NavbarUserButton: React.FC<props> = (props) => {
  const { children, to, color } = props;

  return (
    <Button component={Link} to={to} variant="contained" color={color}>
      {children}
    </Button>
  );
};

export default NavbarUserButton;
