import React from 'react';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface props {
  anchorElUser: HTMLElement | null;
  setAnchorElUser: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

const NavbarUserMenu: React.FC<props> = (props) => {
  const { anchorElUser, setAnchorElUser } = props;

  const settings = ['Account', 'Logout'];

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const renderSettings = () => {
    return settings.map((setting) => {
      return (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      );
    });
  };

  return (
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {renderSettings()}
    </Menu>
  );
};

export default NavbarUserMenu;
