import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface props {
  pages: { value: string; to: string }[];
  setAnchorElNav: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

const NavbarPageButtonBoxStyles = {
  flexGrow: 1,
  display: { xs: 'none', md: 'flex' },
};

const NavbarPageButtonStyles = {
  my: 2,
  mx: 0.5,
  color: 'white',
  display: 'block',
};

const NavbarPageButtons: React.FC<props> = (props) => {
  const { pages, setAnchorElNav } = props;

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
        sx={NavbarPageButtonStyles}
      >
        {value}
      </Button>
    ));
  };

  return <Box sx={NavbarPageButtonBoxStyles}>{renderButtons()}</Box>;
};

export default NavbarPageButtons;
