import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface props {
  pages: { value: string; to: string }[];
  anchorElNav: HTMLElement | null;
  handleCloseNavMenu: () => void;
}

const NavbarMenuStyles = {
  display: { xs: 'block', md: 'none' },
};

const NavbarMenu: React.FC<props> = (props) => {
  const { pages, anchorElNav, handleCloseNavMenu } = props;

  const renderPages = () => {
    return pages.map(({ value, to }) => (
      <MenuItem
        component={Link}
        to={to}
        key={value as React.Key | null | undefined}
        onClick={handleCloseNavMenu}
      >
        <Typography textAlign="center">{value}</Typography>
      </MenuItem>
    ));
  };

  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={NavbarMenuStyles}
    >
      {renderPages()}
    </Menu>
  );
};

export default NavbarMenu;
