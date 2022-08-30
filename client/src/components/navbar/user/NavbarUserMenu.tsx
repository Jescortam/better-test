import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface props {
  anchorElUser: HTMLElement | null;
  setAnchorElUser: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

const NavbarUserMenu = ({ anchorElUser, setAnchorElUser }: props) => {
  const settings = ['Account', 'Logout'];

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
      {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default NavbarUserMenu;
