import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface props {
  pages: String[];
  setAnchorElNav: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

const NavbarPageButtons = ({ pages, setAnchorElNav }: props) => {
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page as React.Key | null | undefined}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default NavbarPageButtons;
