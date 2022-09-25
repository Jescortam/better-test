import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

interface props {
  display: { xs: string; md: string };
  flexGrow: number;
}

const NavbarHeaderStyles = {
  mr: 2,
  fontWeight: 800,
  fontFamily: 'monospace',
  letterSpacing: '.1rem',
  color: 'inherit',
  textDecoration: 'none',
};

const NavbarHeader: React.FC<props> = (props) => {
  const { display, flexGrow } = props;

  return (
    <Typography
      variant="h5"
      noWrap
      component={Link}
      to={'/'}
      sx={Object.assign(NavbarHeaderStyles, { display, flexGrow })}
    >
      Better Test
    </Typography>
  );
};

export default NavbarHeader;
