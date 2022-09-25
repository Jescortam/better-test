import React from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const NavbarSearchIconWrapper: React.FC = () => {
  return (
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
  );
};

export default NavbarSearchIconWrapper;
