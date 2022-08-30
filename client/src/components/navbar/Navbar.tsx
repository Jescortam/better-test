import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import NavbarHeaderTypo from './NavbarHeaderTypo';
import NavbarPagesMenuBox from './pages/NavbarPagesMenuBox';
import NavbarPageButtons from './pages/NavbarPageButtons';
import NavbarSearchField from './search/NavbarSearchField';
import NavbarUserButtons from './user/NavbarUserButtons';

const pages: { value: string; to: string }[] = [
  { value: 'Explore', to: '/collections' },
  { value: 'Create', to: '/collections/new' },
];

// TODO: If user is logged in, use NavbarUserMenuBox
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  return (
    <AppBar position="static" sx={{ mb: 2 }}>
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
          <NavbarSearchField />
          <NavbarUserButtons />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
