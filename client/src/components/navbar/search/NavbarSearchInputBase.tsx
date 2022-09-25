import React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const NavbarSearchInputBase: React.FC = () => {
  return (
    <StyledInputBase
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
    />
  );
};

export default NavbarSearchInputBase;
