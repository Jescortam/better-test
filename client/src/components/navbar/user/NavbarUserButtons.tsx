import React from 'react';
import Stack from '@mui/material/Stack';
import NavbarUserButton from './NavbarUserButton';

const NavbarUserButtonStack: React.FC = () => {
  return (
    <Stack display={{ xs: 'none', md: 'flex' }} direction="row" spacing={1}>
      <NavbarUserButton to="/signup" color="secondary">
        Sign up
      </NavbarUserButton>
      <NavbarUserButton to="/login">Log In</NavbarUserButton>
    </Stack>
  );
};

export default NavbarUserButtonStack;
