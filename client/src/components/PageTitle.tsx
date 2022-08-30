import Typography from '@mui/material/Typography';

interface props {
  children: string;
}

const PageTitle = ({ children }: props) => {
  return (
    <Typography variant="h4" fontWeight="600" mt={4} mb={1}>
      {children}
    </Typography>
  );
};

export default PageTitle;
