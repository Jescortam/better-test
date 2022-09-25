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

const HomePageButtonStyles = {
  width: { xs: 200, sm: '100%' },
  textAlign: 'center',
};

const HomePageButton: React.FC<props> = (props) => {
  const { children, to, color = 'primary' } = props;

  return (
    <Button
      component={Link}
      to={to}
      variant="contained"
      color={color}
      size="large"
      sx={HomePageButtonStyles}
    >
      {children}
    </Button>
  );
};

export default HomePageButton;
