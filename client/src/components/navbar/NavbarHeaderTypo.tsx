import Typography from '@mui/material/Typography';

interface props {
  display: { xs: string; md: string };
  flexGrow: number;
}

const NavbarHeader = ({ display, flexGrow }: props) => {
  return (
    <Typography
      variant="h5"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display,
        flexGrow,
        fontWeight: 800,
        fontFamily: 'monospace',
        letterSpacing: '.1rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      Better Test
    </Typography>
  );
};

export default NavbarHeader;
