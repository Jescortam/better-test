import * as React from 'react';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface props {
  pages: String[];
  anchorElNav: HTMLElement | null;
  handleCloseNavMenu: () => void;
}

const NavbarMenu: React.FC<props> = ({
  pages,
  anchorElNav,
  handleCloseNavMenu,
}: props) => {
  const renderPages = () => {
    return pages.map((page) => (
      <MenuItem
        key={page as React.Key | null | undefined}
        onClick={handleCloseNavMenu}
      >
        <Typography textAlign="center">{page}</Typography>
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
      sx={{
        display: { xs: 'block', md: 'none' },
      }}
    >
      {renderPages()}
    </Menu>
  );
};

export default NavbarMenu;
