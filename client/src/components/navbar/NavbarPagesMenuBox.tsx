import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavbarPagesMenu from './NavbarPagesMenu';

interface props {
  pages: String[];
  anchorElNav: HTMLElement | null;
  setAnchorElNav: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

const NavbarPagesMenuBox = ({ pages, anchorElNav, setAnchorElNav }: props) => {
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
