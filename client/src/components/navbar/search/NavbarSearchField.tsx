import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import NavbarSearchIconWrapper from './NavbarSearchIconWrapper';
import NavbarSearchInputBase from './NavbarSearchInputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(1),
  [theme.breakpoints.only('xs')]: {
    display: 'none',
  },
}));

const NavbarSearchField: React.FC = () => {
  return (
    <Search>
      <NavbarSearchIconWrapper />
      <NavbarSearchInputBase />
    </Search>
  );
};

export default NavbarSearchField;
