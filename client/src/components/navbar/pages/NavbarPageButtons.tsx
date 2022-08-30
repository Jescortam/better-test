import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface props {
  pages: { value: string; to: string }[];
  setAnchorElNav: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

const NavbarPageButtons = ({ pages, setAnchorElNav }: props) => {
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const renderButtons = () => {
    return pages.map(({ value, to }) => (
      <Button
        component={Link}
        to={to}
        key={value as React.Key | null | undefined}
        onClick={handleCloseNavMenu}
        sx={{ my: 2, mx: 0.5, color: 'white', display: 'block' }}
      >
        {value}
      </Button>
    ));
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {renderButtons()}
    </Box>
  );
};

export default NavbarPageButtons;
