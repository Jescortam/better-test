import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import NavbarHeaderTypo from './NavbarHeaderTypo';
import NavbarPagesMenuBox from './NavbarPagesMenuBox';
import NavbarPageButtons from './NavbarPageButtons';

const pages = ['Explore', 'Create Your Own'];

// TODO: If user is logged in, use NavbarUserMenuBox
// TODO: Implement searchbar, login and signup buttons
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavbarPagesMenuBox
            pages={pages}
            anchorElNav={anchorElNav}
            setAnchorElNav={setAnchorElNav}
          />
          <NavbarHeaderTypo display={{ xs: 'flex', md: 'none' }} flexGrow={1} />
          <NavbarHeaderTypo display={{ xs: 'none', md: 'flex' }} flexGrow={0} />
          <NavbarPageButtons pages={pages} setAnchorElNav={setAnchorElNav} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
