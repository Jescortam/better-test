import Typography from '@mui/material/Typography';

interface props {
  children: string;
}

const PageSubtitle = ({ children }: props) => {
  return (
    <Typography variant="h5" my={1}>
      {children}
    </Typography>
  );
};

export default PageSubtitle;
