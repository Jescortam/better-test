import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavbarPagesMenu from './NavbarPagesMenu';

interface props {
  pages: { value: string; to: string }[];
  anchorElNav: HTMLElement | null;
  setAnchorElNav: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

const NavbarPagesMenuBoxStyles = {
  flexGrow: 1,
  display: { xs: 'flex', md: 'none' },
};

const NavbarPagesMenuBox: React.FC<props> = (props) => {
  const { pages, anchorElNav, setAnchorElNav } = props;

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={NavbarPagesMenuBoxStyles}>
      <IconButton
        size="large"
        aria-label="Navigation menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <NavbarPagesMenu
        pages={pages}
        anchorElNav={anchorElNav}
        handleCloseNavMenu={handleCloseNavMenu}
      />
    </Box>
  );
};

export default NavbarPagesMenuBox;
